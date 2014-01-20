// get('/')
exports.index = function(req, res){
  // res.render('index', { title: 'Route Separation Example' });
  res.send('index');
};

// get('/login')
exports.login = function(req, res){
  res.send("login");
};

// get('/logout')
exports.logout = function(req, res){
  res.send("logout");
};

// get(/^(.+)$/)
exports.assets = function(req, res){
  res.sendfile(__dirname + "/public/" + req.params[0]);
};

// get('*')
exports.notFound = function(req, res){
  res.send('Page Not Found', 404);
};