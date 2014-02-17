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
  var conditions = settings.conditions || {},
      fields     = settings.fields || {},
      options    = settings.options || {}; /* here we can unify pagination */

  Order.find(conditions, fields, options, function (err, docs) {
    if (err) { throw new Error(err); }
    cb(docs);
  });
}

// app.get('/posts');
exports.list = function(req, res, next){

  // todo: pagination / limit load
  // Order.count(function (err, count) { do we need to pass an empty obj?
  Order.count({}, function (err, count) { // get post count junk

    // check to see if we're currently searching
    if (!!req.query.search && !!req.query.search.length) {
      paginate({
        conditions: { "exampleVal": { "$regex": req.query.search } }
      }, function (docs) {
        return res.send('search');
        // return searchView(req, res, next);
      });
    }


    Order.find({}, {}, { skip: 0, limit: 5 }, function (err, docs) {
      res.render('list', {
        message: req.flash('message')[0],
        orders: docs,
        count: count
      });
    });
  });

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