// todo: string sanitization
// todo: password encryption
// todo: seperate middleware

    // dependencies
var utils   = require('./utils'),
    express = require('express'),
    app     = express(),
    Redis   = require('connect-redis')(express),
    exphbs  = require('express3-handlebars'),
    helpers = require('./lib/handlebars-helpers'),
    flash   = require('connect-flash'),
    // Dont delete - will be used in the future
    // config  = require('./config'),
    // util    = require('util'),
    PORT    = 1337,
    hbs,
    db;
    // ,
    // MongoDB = require('mongodb'),
    // MongoClient,
    // mongoclient,
    // Server;

console.log("app.js loaded");

/*
 * App setup
 */

// mongodb setup

// MongoClient = MongoDB.MongoClient;
// Server      = MongoDB.Server;

// mongoclient = new MongoClient(new Server("localhost", 27017));
// db = mongoclient.db('meatCenter');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meatCenter');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// handlebars setup

// based on example set up:
// https://github.com/ericf/express3-handlebars/blob/master/examples/advanced/app.js
hbs = exphbs.create({
  defaultLayout : 'main',
  helpers : helpers,
  partialsDir : [
    // __dirname + '/public/templates/', // not sure about this path set up
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

// todo? what does methodOverride do?
app.use(express.methodOverride());

app.use(express.static(__dirname + '/public/build'));

// log
if (!module.parent) {
  app.use(express.logger('dev'));
}


/*
 * Middleware
 */

app.use(utils.authenticate);


/*
 * Routing
 */

require('./lib/boot')(app, { verbose: !module.parent });

// errors, 404, ...

app.use(function(err, req, res, next){

  "use strict";

  // treat as 404
  if (~err.message.indexOf('not found')) {
    return next();
  }

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){

  "use strict";

  res.status(404).render('404', { url: req.originalUrl });
});

/*
 * App startup
 */

if (!module.parent) {

  // mongoclient.open(function(err, mongoclient) {
  db.once('open', function (err) {

    "use strict";

    if(err) {
      throw err;
    }

    console.log("-------------------------------------------------");
    console.log("app started on " + PORT);
    console.log("-------------------------------------------------");

    app.listen(PORT);

    // console.log(util.inspect(app.use, { showHidden: true, depth: null }));
  });

}