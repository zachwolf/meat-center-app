/*jslint node: true */
"use strict";

// todo? rename '/post' to '/order'

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    orderSchema = new Schema({
      // name    : String,
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
  // todo: load posts
  // todo: pagination
  res.render('list', {
    message: req.flash('message')[0]
  });
};

// app.get('/post/new');
exports.create = function(req, res, next){
  res.render('new');
};

// app.post('/post/new');
exports.save = function(req, res, next){

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

  if (!req.body.exampleVal) {
    res.render('new', {
      'errors': 'This is an error'
    });
  } else {
    req.flash('message', {
      type: 'success',
      value: 'New post created'
    });

    // todo: post submission

    return res.redirect('/posts');
  }
};

// app.get('/post/:id');
exports.show = function (req, res, next) {
  res.render('single', {
    'id': req.params.post_id
  });
};

// app.get('/post/:id/edit');
exports.edit = function (req, res, next) {
  res.render('edit');
};

// app.put('/post/:id/update');
// app.delete('/post/:id/delete');
// app.get('/post/search');