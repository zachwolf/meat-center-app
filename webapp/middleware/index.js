/*jslint node: true */
"use strict";

var rootPath = require('../config').rootPath,
    exphbs   = require('express3-handlebars'),
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

};

// app.use(utils.authenticate);
