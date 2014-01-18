var SETTINGS = require("./globalSettings");
var util     = require('util');

module.exports = function (grunt) {

  // compile haml
  grunt.registerTask('haml:dev', "compile markup to html", function () {

    var conf = {},
        FILES = {};

    FILES[ SETTINGS.BUILD_PATH + "/index.html" ] = [ SETTINGS.MARKUP_SOURCE_PATH + '/partials/header.haml',
                                                     SETTINGS.MARKUP_SOURCE_PATH + '/index.haml',
                                                     SETTINGS.MARKUP_SOURCE_PATH + '/livereload.haml'];

    conf = {
      markup: {
        options: {
          style: 'expanded'
        },
        files: FILES
      }
    };

    grunt.config('haml', conf);
    grunt.task.run("haml");
  });

  grunt.registerTask('haml:dist', "compile markup to html", function () {

    var conf = {},
        FILES = {};

    FILES[ SETTINGS.BUILD_PATH + "/index.html" ] = SETTINGS.MARKUP_SOURCE_PATH + '/index.haml';

    conf = {
      markup: {
        options: {
          style: 'compressed'
        },
        files: FILES
      }
    };

    grunt.config('haml', conf);
    grunt.task.run("haml");
  });
};