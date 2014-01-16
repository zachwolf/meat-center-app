// thanks to https://coderwall.com/p/q-nx-w

var SETTINGS = require("./globalSettings");

module.exports = function (grunt) {

  grunt.registerTask('nodeServer', 'Start a custom web server', function() {
    grunt.log.writeln('Started web server on port ' + SETTINGS.SERVER_PORT);
    require('./../webapp/app.js').listen(SETTINGS.SERVER_PORT);
  });

};