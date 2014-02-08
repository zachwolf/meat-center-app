// todo: string sanitization
// todo: password encryption
// todo: seperate middleware

    // dependencies
var middleware = require('./middleware'),
    express  = require('express'),
    app      = express(),

    Redis    = require('connect-redis')(express),
    flash    = require('connect-flash'),
    mongoose = require('mongoose'),
    // Dont delete - will be used in the future
    // config  = require('./config'),
    // util    = require('util'),
    PORT    = 1337,
    db;

console.log("app.js loaded");

/*
 * App setup
 */


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

// methodOverride() allows us to use app.put and app.delete methods
// http://stackoverflow.com/questions/8378338/what-does-connect-js-methodoverride-do#answer-8378414
app.use(express.methodOverride());

app.use(express.static(__dirname + '/public/build'));

// log


/*
 * Middleware
 */

if (!module.parent) {
  app.use(express.logger('dev'));
}

middleware(app);


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

  mongoose.connect('mongodb://localhost/meatCenter');
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

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