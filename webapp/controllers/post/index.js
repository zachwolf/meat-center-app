exports.list = function(req, res, next){
  res.render('list');
};


// app.all('/post/*', authenticate);

// app.get('/post', authenticate, post.index);
// app.get('/post/new', post.createNew);
// app.post('/post/add', post.submitNew);
// app.get('/post/:id', post.single);
// app.get('/post/:id/edit', post.edit);
// app.post('/post/:id/update', post.update);
// app.post('/post/:id/delete', post.delete);
// app.get('/post/search', post.search);