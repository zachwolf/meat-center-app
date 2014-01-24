var config = require('./config'),
    // dependencies
    util    = require('util'),
    express = require('express'),
    app     = express(),
    Redis   = require('connect-redis')(express),
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
// app.set('view engine', 'html');


// files for error pages
app.set('views', __dirname + '/views');

// session 

app.use(express.cookieParser('keyboard cat'));
app.use(express.session({
    secret: 'keyboard cat',
    store: new Redis({
      host: 'localhost', port: 6379
    })
  })
);

// flash setup

app.use(flash());

// general setup

app.use(express.compress());
app.use(express.bodyParser());

// ?
app.use(express.methodOverride());

app.use(express.static(__dirname + '/public'));
// app.use(express.logger('dev'));
// log
if (!module.parent) app.use(express.logger('dev'));



/*
 * Middleware
 */

function authenticate(req, res, next) {
  if (req.session.loggedIn !== true) {
    req.flash('referralURL', req.url);
    return res.redirect('/login');
  } else {
    // expose info to templates
    res.locals(req.session.user);
    res.locals({"loggedIn": true});
    next();
  }
}

/*
 * Routing
 */

require('./lib/boot')(app, { verbose: !module.parent });

// general

// app.get('/', site.index);
// app.get('/login', site.login);
// app.post('/login/submit', site.submitlogin(db));
// app.get('/logout', site.logout);

// // posts

// app.all('/post/*', authenticate);

// app.get('/post', authenticate, post.index);
// app.get('/post/new', post.createNew);
// app.post('/post/add', post.submitNew);
// app.get('/post/:id', post.single);
// app.get('/post/:id/edit', post.edit);
// app.post('/post/:id/update', post.update);
// app.post('/post/:id/delete', post.delete);
// app.get('/post/search', post.search);

// errors, 404, ...

app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) return next();

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).render('404', { url: req.originalUrl });
});

/*
 * App startup
 */

if (!module.parent) {

  mongoclient.open(function(err, mongoclient) {

    if(err) throw err;

    app.listen(1337);

    // console.log(util.inspect(app.use, { showHidden: true, depth: null }));
  });

}