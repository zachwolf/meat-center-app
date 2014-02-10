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

// app.get('/posts');
exports.list = function(req, res, next){
  // todo: pagination / limit load
  Order.find({}, function (err, docs) {
    res.render('list', {
      message: req.flash('message')[0],
      orders: docs
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

    console.log("------------------  exports.save  --------------------");
    console.log("req.session", req.session);
    console.log("req.body", req.body);
    console.log("------------------ /exports.save  --------------------");

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
  console.log("------------------  .update  --------------------");
  console.log("req.params", req.params);
  console.log("req.body", req.body);
  console.log("------------------ /.update  --------------------");

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

// app.get('/post/search');