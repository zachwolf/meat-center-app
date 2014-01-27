// todo: start node server from grunt
// todo? nodemon

// var SETTINGS = require("./settings"),
    // SERVER   = require("../" + SETTINGS.SERVER_PATH + '/app.js').app;

module.exports = function (grunt) {

  /*
  if ( process.execArgv[0] === "--standalone" ) {
    // start in line when we're not running things through grunt
    console.log("standalone");
    module.exports.app = app.listen(1337);
  } else {
    // export app so grunt can start the server
    module.exports.app = app;
  }
  */

  grunt.registerTask('server:start', 'Start a web server', function() {
    console.log("-------------------------------------------------");
    console.log("server:start called");
    console.log("-------------------------------------------------");

    /*

nodemon: {
      dev: {
        script: 'app.js',
        options: {
          cwd: "webapp",
          // nodeArgs: ['--debug'],
          // env: {
          //   PORT: '5455'
          // },
          // omit this property if you aren't serving HTML files and 
          // don't want to open a browser tab on start
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log("log nodemon");
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              console.log("config:update nodemon");
              // setTimeout(function() {
              //   require('open')('http://localhost:5455');
              // }, 1000);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function () {
              console.log("restart nodemon");
              // Delay before server listens on port
              // setTimeout(function() {
              //   require('fs').writeFileSync('.grunt/rebooted', 'rebooted');
              // }, 1000);
            });
          }
        }
      }
    }

    */
    /*console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    SERVER.listen(SETTINGS.SERVER_PORT);*/
  });

};