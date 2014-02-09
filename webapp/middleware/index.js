/*jslint node: true */
"use strict";

var rootPath = require('../config').rootPath,
    express  = require('express'),
    Redis    = require('connect-redis')(express),
    exphbs   = require('express3-handlebars'),
    flash    = require('connect-flash'),
    helpers  = require(rootPath('lib/handlebars-helpers')),
    hbs;

module.exports = function (app) {

  console.log(rootPath('lib'));
  
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

  // general setup

  app.use(express.compress()); // gzips (i think)
  app.use(express.bodyParser());

  // methodOverride() allows us to use app.put and app.delete methods
  // http://stackoverflow.com/questions/8378338/what-does-connect-js-methodoverride-do#answer-8378414
  app.use(express.methodOverride());

  // flash setup

  app.use(flash());

  // session 

  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({
      secret: 'keyboard cat',
      store: new Redis({
        host: 'localhost', port: 6379
      })
    })
  );

  // BEGIN DUMMY LOGGED IN DATA
  app.use(function (req, res, next) {
    req.session.loggedin = true;
    req.session.user = {
      username: 'hello@zachwolf.com'
    };

    next();
  });
  // END DUMMY LOGGED IN DATA

};

// app.use(utils.authenticate);
