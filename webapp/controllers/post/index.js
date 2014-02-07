// app.get('/posts');
exports.list = function(req, res, next){
  "use strict";

  // todo: load posts
  // todo: pagination
  res.render('list', {
    message: req.flash('message')[0]
  });
};

// app.get('/post/new');
exports.create = function(req, res, next){
  "use strict";

  res.render('new');
};

// app.post('/post/new');
exports.save = function(req, res, next){
  "use strict";

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
  "use strict";

  res.render('single', {
    'id': req.params.post_id
  });
};

// app.get('/post/:id/edit');
// app.post('/post/:id/update');
// app.post('/post/:id/delete');
// app.get('/post/search');