    // dependencies
var util    = require('util'),
    express = require('express'),
    app     = express(),
    exphbs  = require('express3-handlebars'),
    hbs,
    // routes
    site    = require('./site'),
    post    = require('./post'),
    admin   = require('./admin');

/*
 * App setup
 */

// console.log(util.inspect(app.use, { showHidden: true, depth: null }));

// based on example set up:
// https://github.com/ericf/express3-handlebars/blob/master/examples/advanced/app.js

hbs = exphbs.create({
    defaultLayout: 'main',
    // helpers      : helpers,
    partialsDir: [
        __dirname + '/public/templates/', // not sure about this path set up
        'views/partials/'
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.logger('dev'));

/*
 * Middleware
 */

function authenticate(req, res, next) {
  console.log("authenticate");
  next();
}

/*
 * Routing
 */

// general

app.get('/', site.index);
app.get('/login', site.login);
app.get('/logout', site.logout);

// posts

app.get('/post', authenticate, post.index);
app.get('/post/new', authenticate, post.createNew);
app.post('/post/add', authenticate, post.submitNew); // ?
app.get('/post/:id', authenticate, post.single);
app.get('/post/:id/edit', authenticate, post.edit);
app.post('/post/:id/update', authenticate, post.update);
app.post('/post/:id/delete', authenticate, post.delete);
app.get('/post/search', authenticate, post.search);

// admin

app.get('/admin', authenticate, admin.index);
app.get('/admin/user', authenticate, admin.listUsers);
app.get('/admin/user/new', authenticate, admin.createNew);
app.post('/admin/user/add', authenticate, admin.submitNew); // ?
app.get('/admin/user/:id', authenticate, admin.user);
app.get('/admin/user/:id/edit', authenticate, admin.edit);
app.post('/admin/user/:id/update', authenticate, admin.update);
app.post('/admin/user/:id/delete', authenticate, admin.delete);

// assets

app.get(/^(.+)$/, site.assets);

// 404

app.get('*', site.notFound);

/*
assets:
function(req, res) {
  res.sendfile(__dirname + "/public/" + req.params[0]);
}
not found:
function(req, res){
    res.send('Page Not Found', 404);
}*/


/*
/
/login
/logout
/post
/post/new
/post/:id
/post/:id/edit
/post/:id/delete
/post/search?[property]=[value]
/admin
/admin/newuser
/admin/edituser/:id
*/

if ( process.execArgv[0] === "--standalone" ) {
  // start in line when we're not running things through grunt
  console.log("standalone");
  module.exports.app = app.listen(1337);
} else {
  // export app so grunt can start the server
  module.exports.app = app;
}

console.log("-------------------------------------------------");
console.log("app.js called");
console.log("-------------------------------------------------");
