var SETTINGS = require("./globalSettings"),
    SERVER   = require("../" + SETTINGS.SERVER_PATH + '/app.js');

module.exports = function (grunt) {

  grunt.registerTask('server:start', 'Start a web server', function() {
    console.log("-------------------------------------------------");
    console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    console.log("-------------------------------------------------");
    // SERVER.listen(SETTINGS.SERVER_PORT);
  });

  grunt.registerTask('server:stop', 'Start a web server', function() {
    console.log("-------------------------------------------------");
    console.log("stop server?");
    console.log("SERVER.close", SERVER.close);
    console.log("SERVER._connections", SERVER._connections);
    console.log("-------------------------------------------------");
    // console.log("-------------------------------------------------");
    // console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    // console.log("-------------------------------------------------");
    // SERVER.listen(SETTINGS.SERVER_PORT);
    SERVER.close();
  });



};