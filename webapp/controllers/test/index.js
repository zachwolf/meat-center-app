// app.get('/tests')
exports.list = function(req, res, next){
  res.render('list');
};

// app.get('/test/:test_id')
exports.show = function(req, res, next){
  res.render('list', {data: req.param('test_id')});
};

// app.post('/test/:test_id')
exports.update = function(req, res, next){
  res.render('list', {data: "update"});
};

// app.get('/test/:test_id/edit')
exports.edit = function(req, res, next){
  res.render('list', {data: "edit"});
};

// app.get('/test/new')
exports.create = function(req, res, next){
  res.render('list', {data: "create"});
};

// app.post('/test/new')
exports.save = function(req, res, next){
  res.render('list', {data: "save"});
};

// app.post('/test/:test_id/delete')
exports.delete = function(req, res, next){
  res.render('list', {data: "save"});
};