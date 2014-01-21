// get('/')
exports.index = function (db) {
  return function(req, res){
    db.collection('posts').findOne({}, function(err, doc) {

      if(err) throw err;

      res.render('home', doc);
    });
  };
};

// get('/login')
exports.login = function(req, res){
  res.render('login', {
    layout: 'alt', errors: req.flash('errors')
  });
};

// post('/login/submit')
exports.submitlogin = function(db) {
  return function(req, res, next){

    db.collection('users').findOne({ "email" : req.param('email') }, function(err, doc) {

      if(err) throw err;

      // console.log("------------------  submitlogin  --------------------");
      // console.log("doc", doc);
      // console.log("!!doc", !!doc);
      // console.log("next", next);
      // console.log(req.param('email'));
      // console.log(req.param('password'));
      // console.log("------------------ /submitlogin  --------------------");

      if(!doc) {
        req.flash('errors', 'Invalid email');
        return res.redirect('/login');
      } else {
        if (doc.password !== req.param('password')) {
          // forward
          req.flash('errors', 'Invalid password');
          return res.redirect('/login');
        } else {
          // req.session.loggedIn = true;
          res.redirect('/post');
        }
      }

    });
  };
};

// get('/logout')
exports.logout = function(req, res){
  res.send("logout");
};

// get(/^(.+)$/)
exports.assets = function(req, res){
  res.sendfile(__dirname + "/public/" + req.params[0]);
};

// get('*') catch all
exports.notFound = function(req, res){
  res.send('Page Not Found', 404);
};