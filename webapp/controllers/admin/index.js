/*

case 'show':
  method = 'get';
  path = '/' + name + '/:' + name + '_id';
  break;
case 'list':
  method = 'get';
  path = '/' + name + 's';
  break;
case 'edit':
  method = 'get';
  path = '/' + name + '/:' + name + '_id/edit';
  break;
case 'update':
  method = 'put';
  path = '/' + name + '/:' + name + '_id';
  break;
case 'create':
  method = 'post';
  path = '/' + name;
  break;
case 'index':

*/


exports.name = "user";
exports.prefix = '/admin';

exports.index = function(req, res){
  res.render('landing');
};

exports.list = function(req, res, next){
  res.render('landing');
};

exports.show = function(req, res, next){
  res.render('landing', { user: req.user });
};

// exports.create = function(req, res, next){
//   // res.render('landing', { request: "create" });
//   res.send('create');
// };

// exports.insert = function(req, res, next){
//   // res.render('request', { request: "insert" });
//   res.send('insert');
// };

// exports.update = function(req, res, next){
//   res.render('list');
// };

// exports.edit = function(req, res, next){
//   res.render('list');
// };

// exports.delete = function(req, res, next){
//   res.render('list');
// };

// exports.delete = function(req, res, next){
//   res.render('list');
// };

// sign in ?
// sign out ?

/*

X   app.get('/admin', authenticate, admin.index);
X   app.get('/admin/users', admin.listUsers);
    app.get('/admin/user/new', admin.submitNew);
    app.post('/admin/user/new', admin.createNew);
X   app.get('/admin/user/:id', admin.user);
X   app.get('/admin/user/:id/edit', admin.edit);
X   app.put('/admin/user/:id', admin.update);
X   app.delete('/admin/user/:id/delete', admin.delete);


    GET /admin/ -> index
    GET /admin/users -> list
    GET /admin/user/:user_id -> show
    PUT /admin/user/:user_id -> update
    GET /admin/user/:user_id/edit -> edit
    GET /admin/user/:user_id/delete -> delete
*/



/*


// app.get('/', site.index);
// app.get('/login', site.login);
// app.post('/login/submit', site.submitlogin(db));
// app.get('/logout', site.logout);


*/
