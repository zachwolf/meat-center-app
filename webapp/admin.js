// get('/admin')
exports.index = function(req, res){
  res.send('admin index');
};

// get('/admin/user')
exports.listUsers = function(req, res){
  res.send('list users');
};

// get('/admin/user/new')
exports.createNew = function(req, res){
  res.render('admin/newUser');
};

// post('/admin/user/add')
exports.submitNew = function(req, res){
  res.send('add to database');
};

// get('/admin/user/:id')
exports.user = function(req, res){
  console.log("user id: ", req.params.id);
  res.send('single user');
};

// get('/admin/user/:id/edit')
exports.edit = function(req, res){
  console.log("post id: ", req.params.id);
  res.send('edit user');
};

// post('/admin/user/:id/update')
exports.update = function(req, res){
  console.log("post id: ", req.params.id);
  res.send('update user');
};

// post('/admin/user/:id/delete')
exports.delete = function(req, res){
  console.log("post id: ", req.params.id);
  res.send('delete user');
};