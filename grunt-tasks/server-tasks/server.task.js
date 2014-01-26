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
    /*console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    SERVER.listen(SETTINGS.SERVER_PORT);*/
  });

};