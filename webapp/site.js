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
  console.log("-------------------------------------------------");
  console.log("server.db", server.db);
  console.log("-------------------------------------------------");
  server.db.collection('posts').findOne({}, function(err, doc) {

    if(err) throw err;

    res.render('home', doc);
  });
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