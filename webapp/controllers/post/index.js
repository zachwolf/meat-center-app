/*jslint node: true */
"use strict";

// todo? rename '/post' to '/order'
// todo: better (or any) error handling

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    orderSchema = new Schema({
      // name    : String,
      // todo: better order info
      creator : String,
      date    : { type: Date, default: Date.now },
      exampleVal: String // dummy value
      /*
      // can we save an editted history?
      edits: [
        {
          changed: String,
          changedBy: String,
        }
      ]
      */
    }),
    Order = mongoose.model("Order", orderSchema);

// app.get('/post/search');
/*function searchView (req, res, next) {
  // console.log("req.query.search", req.query.search);
  Order.find({"exampleVal": {"$regex": req.query.search}}, {}, { skip: 0, limit: 5 }, function (err, docs) {
    res.render('list', {
      message: req.flash('message')[0],
      orders: docs
    });
  });
  // return res.send('search');
}*/

function paginate (settings, cb) { /* settings: { conditions: {}, fields: {}, options: {} } */
  var info       = {},
      conditions = settings.conditions || {},
      fields     = settings.fields || {},
      options    = settings.options || {}, /* here we can unify pagination */
      page       = settings.page;

  if (options.skip < 0) {
    cb(new Error("Invalid page number"));
  }

  Order.count(conditions, function (err, count) { // get post count junk

    // total records
    info.count = count;

    // todo: range of results we're currently seeing
    // info.range = offset * pageItemCount % count?;

    // how many total pages there are
    info.pageCount = Math.ceil(info.count / options.limit);

    // current page number
    info.currentPage = page;

    // next page
    info.hasNext = (page + 1 <= info.pageCount) ? true : false;
    info.next = page + 1;

    // prev page
    info.hasPrev = (page - 1 > 0) ? true : false;
    info.prev = page - 1;

    Order.find(conditions, fields, options, function (err, docs) {
      if (err) { throw new Error(err); }
      cb(null, docs, info);
    });
  });
}

// app.get('/posts');
// app.get('/posts/:page_number');
// app.get('/posts?search=foo');
exports.list = function(req, res, next){

  // todo: pagination / limit load
  // todo: page limiting (so you can't go to page 9 when there are 5 pages of results)

  // default to all posts
  var page = parseInt(req.params.page_id, 10) || 1,
      settings = {/*
          conditions: {},
          fields: {},
        */
        options: {
          // skip limit * page number
          skip: (page - 1) * 5,
          limit: 5
        },
        page: page
      },
      render = function (err, docs, collectionInfo) {

        // error handling
        if (err) {
          console.log("err!", err);
        }

        if (!docs.length) {
          return res.render("no-results");
        }

        return res.render('list', {
          orders: docs,
          pagination: collectionInfo
        });
      };

  // check to see if we're currently searching
  if (!!req.query.search && !!req.query.search.length) {
    settings.conditions = { "exampleVal": { "$regex": req.query.search } };
  }

  // call and render
  paginate(settings, render);

};

// app.get('/post/new');
exports.create = function(req, res, next){
  res.render('new');
};

// app.post('/post/new');
exports.save = function(req, res, next){

  if (!req.body.exampleVal) {
    res.render('new', {
      'errors': 'This is an error'
    });
  } else {
    var order = new Order({
        creator: req.session.user.username
      });

    for (var param in req.body) {
      if (req.body.hasOwnProperty(param)) {
        order[param] = req.body[param];
      }
    }

    order.save(function (err) {
      if (err) {
        throw new Error(err);
      }

      req.flash('message', {
        type: 'success',
        value: 'New post created'
      });

      return res.redirect('/posts');
    });
  }
};

// app.get('/post/:id');
exports.show = function (req, res, next) {
  Order.findById(req.params.post_id, function (err, doc) {
    res.render('single', {
      message: req.flash('message')[0],
      order: doc
    });
  });
};

// app.get('/post/:id/edit');
exports.edit = function (req, res, next) {
  Order.findById(req.params.post_id, function (err, doc) {
    res.render('edit', {
      order: doc
    });
  });
};

// app.put('/post/:id/update');
exports.update = function (req, res, next) {
  Order.findById(req.params.post_id, function (err, doc) {
    
    for (var param in req.body) {
      if (req.body.hasOwnProperty(param)) {
        doc[param] = req.body[param];
      }
    }

    doc.save(function (err) {

      req.flash('message', {
        type: 'success',
        value: 'Updated Post'
      });

      return res.redirect('/post/' + req.params.post_id);
    });

  });

};

// app.delete('/post/:id/delete');
exports.delete = function (req, res, next) {
  Order.findByIdAndRemove(req.params.post_id, function (err, doc) {

    req.flash('message', {
      type: 'success',
      value: 'Post Deleted'
    });

    return res.redirect('/posts');
  });
};