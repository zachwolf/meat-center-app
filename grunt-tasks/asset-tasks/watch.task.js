var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  // configure prompt task
  grunt.registerTask('prompt:serverStart', 'prompt for starting server', function () {
    var conf = {};
    
    conf = {
      task: {
        options: {
          questions: [
            {
              config: 'options.startServer',
              type: 'confirm',
              default: false,
              message: 'Start local server?'
            }
          ],
          then: function(results){
            if( results['options.startServer'] ) {
              // start a local server
              grunt.task.run("server:start");
              grunt.task.run("open");
            }
          }
        }
      }
    };

    grunt.config('prompt', conf);
    grunt.task.run("prompt");

  });


  // configure watch task
  grunt.task.renameTask("watch", "_watch");

  grunt.registerTask('watch', "Compile code on change", function () {

    var conf = {};

    // clean out and recompile all of BUILD_PATH
    // grunt.task.run("build");

    // prompt if we should start up the local server
    grunt.task.run("prompt:serverStart");

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