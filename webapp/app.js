    // dependencies
var util    = require('util'),
    express = require('express'),
    app     = express(),
    exphbs  = require('express3-handlebars'),
    helpers = require('./helpers/debug'),
    MongoDB = require('mongodb'),
    flash   = require('connect-flash'),
    // routes
    site    = require('./site'),
    post    = require('./post'),
    admin   = require('./admin'),
    hbs,
    MongoClient,
    mongoclient,
    db,
    Server;

/*
 * App setup
 */

console.log("-------------------------------------------------");
console.log("helpers", helpers);
console.log("-------------------------------------------------");

// mongodb setup

MongoClient = MongoDB.MongoClient;
Server      = MongoDB.Server;

mongoclient = new MongoClient(new Server("localhost", 27017));
db = mongoclient.db('meatCenter');


// handlebars setup

// based on example set up:
// https://github.com/ericf/express3-handlebars/blob/master/examples/advanced/app.js
hbs = exphbs.create({
  defaultLayout : 'main',
  helpers : helpers,
  partialsDir : [
    __dirname + '/public/templates/', // not sure about this path set up
    'views/partials/'
  ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// flash setup

app.use(express.cookieParser('keyboard cat'));
app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(flash());

// general setup

app.use(express.compress());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(express.logger('dev'));

/*
 * Middleware
 */

function authenticate(req, res, next) {
  if (req.session.loggedIn !== true) {
    req.flash('referralURL', req.url);
    return res.redirect('/login');
  } else {
    console.log("authenticated");
    next();
  }
}

/*
 * Routing
 */

// general

app.get('/', site.index);
app.get('/login', site.login);
app.post('/login/submit', site.submitlogin(db));
app.get('/logout', site.logout);

// posts

app.all('/post/*', authenticate);

app.get('/post', authenticate, post.index);
app.get('/post/new', post.createNew);
app.post('/post/add', post.submitNew);
app.get('/post/:id', post.single);
app.get('/post/:id/edit', post.edit);
app.post('/post/:id/update', post.update);
app.post('/post/:id/delete', post.delete);
app.get('/post/search', post.search);

// admin

app.all('/admin/*', authenticate);

app.get('/admin', authenticate, admin.index);
app.get('/admin/user', admin.listUsers);
app.get('/admin/user/new', admin.createNew);
app.post('/admin/user/add', admin.submitNew);
app.get('/admin/user/:id', admin.user);
app.get('/admin/user/:id/edit', admin.edit);
app.post('/admin/user/:id/update', admin.update);
app.post('/admin/user/:id/delete', admin.delete);

// assets

app.get(/^(.+)$/, site.assets);

// errors, 404, ...

app.get('*', site.notFound);

/*
 * App startup
 */

mongoclient.open(function(err, mongoclient) {

  if(err) throw err;

  app.listen(1337);

  // console.log("-------------------------------------------------");
  // console.log("app.js called");
  // console.log(util.inspect(app.use, { showHidden: true, depth: null }));
  // console.log("-------------------------------------------------");
});