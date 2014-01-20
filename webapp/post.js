// get('/post')
exports.index = function(req, res){
  res.send('all posts');
};

// get('/post/new')
exports.createNew = function(req, res){
  res.send('new post template');
};

// get('/post/add')
exports.submitNew = function(req, res){
  res.send('render new post');
};

// get('/post/:id')
exports.single = function(req, res){
  res.send('single post');
};

// get('/post/:id/edit')
exports.edit = function(req, res){
  res.send('edit post');
};

// get('/post/:id/update')
exports.delete = function(req, res){
  res.send('update post');
};

// get('/post/:id/delete')
exports.delete = function(req, res){
  res.send('delete post');
};

// get('/post/search')
exports.search = function(req, res){
  res.send('search posts');
};