// get('/')
exports.index = function(req, res){
  if (req.session.loggedIn !== true) { // if not logged in
    res.render('landing');
  } else {
    return res.redirect('/post');
  }
};

// get('/login')
exports.login = function(req, res){
  res.render('login', {
    layout : 'alt',
    errors : req.flash('errors')
  });
};

// post('/login/submit')
exports.submitlogin = function(db) {
  return function(req, res, next){

    db.collection('users').findOne({ "email" : req.param('email') }, function(err, doc) {

      if(err) throw err;

      if(!doc) {
        req.flash('errors', 'Invalid email');
        return res.redirect('/login');
      } else {
        if (doc.password !== req.param('password')) {
          // forward
          req.flash('errors', 'Invalid password');
          return res.redirect('/login');
        } else {
          req.session.loggedIn = true;
          res.locals.email = doc.email;
          res.redirect(req.flash('referralURL')[0] || '/post');
        }
      }

    });
  };
};

// get('/logout')
exports.logout = function(req, res){
  req.session.loggedIn = false;
  req.flash('message', 'Successfully logged out');
  return res.redirect('/');
};

// get(/^(.+)$/)
exports.assets = function(req, res){
  res.sendfile(__dirname + "/public/" + req.params[0]);
};

// get('*') catch all
exports.notFound = function(req, res){
  res.send('Page Not Found', 404);
};