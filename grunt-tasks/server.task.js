var SETTINGS = require("./globalSettings"),
    SERVER   = require("../" + SETTINGS.SERVER_PATH + '/app.js').app;

module.exports = function (grunt) {

  grunt.registerTask('server:start', 'Start a web server', function() {
    console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    SERVER.listen(SETTINGS.SERVER_PORT);
  });

};