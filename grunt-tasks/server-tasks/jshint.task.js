var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('jshint:server', "run jshint on our server js", function () {
    
    var conf = {};

    conf = {
      task : {
        options: SETTINGS.JSHINT_SERVER_SETTINGS,
        files: {
          src: [ SETTINGS.SERVER_PATH + '/*.js', SETTINGS.SERVER_PATH + '/**/*.js',
                 "!" + SETTINGS.SERVER_PATH + '/lib/*.js',
                 "!" + SETTINGS.SERVER_PATH + '/public/**/*.js']
        }
      }
    };

    grunt.config('jshint', conf);
    grunt.task.run("jshint");

  });

};