var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('watch:assets', "Compile code on change", function () {

    var conf = {};

    // clean out and recompile all of BUILD_PATH
    grunt.task.run("build:dev");

    conf = {
      // reload the page when things change
      options: { livereload: true },
      // process style sheets on change
      styles: {
        files: [
          SETTINGS.STYLE_SOURCE_PATH + '/*.scss',
          SETTINGS.STYLE_SOURCE_PATH + '/**/*.scss'
        ],
        tasks: [
          'compass:dev'
        ]
      },
      // process js on change
      scripts: {
        files: [
          SETTINGS.SCRIPT_SOURCE_PATH + '/*.js',
          SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js'
        ],
        tasks: [
          'jshint:dev',
          'karma',
          'browserify'
        ]
      }
    };

    grunt.config('_watch', conf);
    grunt.task.run("_watch");

  });

};