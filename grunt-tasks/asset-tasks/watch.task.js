// todo? grunt prompt

var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.task.renameTask("watch", "_watch");

  grunt.registerTask('watch', "Compile code on change", function () {

    var conf = {};

    console.log("watch called");

    // clean out and recompile all of BUILD_PATH
    // grunt.task.run("build");

    // start a local server
    // grunt.task.run("server:start");
    // grunt.task.run("open:local");

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
          'copy:scripts'
        ]
      }
      // ,
      // // compile html business
      // markup: {
      //   files: [
      //     SETTINGS.MARKUP_SOURCE_PATH + '/*.handlebars',
      //     SETTINGS.MARKUP_SOURCE_PATH + '/**/*.handlebars'
      //   ],
      //   tasks: [
      //     'copy:markup'
      //   ]
      // }
    };

    grunt.config('_watch', conf);
    grunt.task.run("_watch");

  });

  // grunt.registerTask('watch:dist', "watch and build local to :dist settings", function () {

  //   var conf = {};

  //   console.log("watch:dist called");

  //   // clean out and recompile all of BUILD_PATH
  //   grunt.task.run("build:dist");

  //   // start a local server
  //   // grunt.task.run("server:start");
  //   // grunt.task.run("open:local");

  //   conf = {
  //     // reload the page when things change
  //     options: { livereload: true },
  //     // process style sheets on change
  //     styles: {
  //       files: [
  //         SETTINGS.STYLE_SOURCE_PATH + '/*.scss',
  //         SETTINGS.STYLE_SOURCE_PATH + '/**/*.scss'
  //       ],
  //       tasks: [
  //         'compass:dist'
  //       ]
  //     },
  //     // process js on change
  //     scripts: {
  //       files: [
  //         SETTINGS.SCRIPT_SOURCE_PATH + '/*.js',
  //         SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js'
  //       ],
  //       tasks: [
  //         'jshint:dist',
  //         'karma',
  //         'requirejs:compile'
  //       ]
  //     },
  //     // compile html business
  //     markup: {
  //       files: [
  //         SETTINGS.MARKUP_SOURCE_PATH + '/*.handlebars',
  //         SETTINGS.MARKUP_SOURCE_PATH + '/**/*.handlebars'
  //       ],
  //       tasks: [
  //         'copy:markup'
  //       ]
  //     }
  //   };

  //   grunt.config('watch', conf);
  //   grunt.task.run("watch");

  // });

};