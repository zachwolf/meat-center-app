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
  res.send('create user');
};

// get('/admin/user/add')
exports.submitNew = function(req, res){
  res.send('add to database');
};

// get('/admin/user/:id')
exports.user = function(req, res){
  res.send('single user');
};

// get('/admin/user/:id/edit')
exports.edit = function(req, res){
  res.send('edit user');
};

// get('/admin/user/:id/update')
exports.update = function(req, res){
  res.send('update user');
};

// get('/admin/user/:id/delete')
exports.delete = function(req, res){
  res.send('delete user');
};