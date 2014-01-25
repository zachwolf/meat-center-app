// task settings
var GRUNT_TASKS_PATH  = "./grunt-tasks",
    SETTINGS = require( GRUNT_TASKS_PATH + "/settings" );

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    karma: {
      unit: {
        singleRun: true,
        configFile: 'karma.conf.js'
      }
    },
    compass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          noLineComments: true
        }
      },
      dev: {
        options: {
          sassDir : SETTINGS.STYLE_SOURCE_PATH,
          cssDir  : SETTINGS.STYLE_BUILD_PATH,
          outputStyle: 'expanded',
          watch: false
        }
      }
    },
    jshint: {
      dist: {
        options: SETTINGS.JSHINT_DIST_SETTINGS,
        files: {
          src: [ SETTINGS.SCRIPT_SOURCE_PATH + '/*.js', SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js',
                 "!" + SETTINGS.SCRIPT_SOURCE_PATH + '/lib/*.js',
                 "!" + SETTINGS.SCRIPT_SOURCE_PATH + '/test/*.js']
        }
      },
      dev: {
        options: SETTINGS.JSHINT_DEV_SETTINGS,
        files: {
          src: [ SETTINGS.SCRIPT_SOURCE_PATH + '/*.js', SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js',
                 "!" + SETTINGS.SCRIPT_SOURCE_PATH + '/lib/*.js']
        }
      }
    },
    open : {
      local : {
        path: 'http://localhost:' + SETTINGS.SERVER_PORT,
        app: 'Google Chrome'
      }
    },
    copy: {
      scripts: {
        files: [
          {
            // copy all js and directories except our tests
            src: [ '**', '!test/**' ],
            expand: true,
            cwd: SETTINGS.SCRIPT_SOURCE_PATH + '/',
            dest: SETTINGS.SCRIPT_BUILD_PATH
          }
        ]
      },
      markup: {
        files: [
          {
            src: [ '**' ],
            expand: true,
            cwd: SETTINGS.MARKUP_SOURCE_PATH + '/',
            dest: SETTINGS.MARKUP_BUILD_PATH
          }
        ]
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "app",
          baseUrl: SETTINGS.SCRIPT_SOURCE_PATH,
          mainConfigFile: SETTINGS.SCRIPT_SOURCE_PATH + "/app.js",
          out: SETTINGS.SCRIPT_BUILD_PATH + "/app.js"
        }
      }
    },
    clean: [ SETTINGS.BUILD_PATH ]
  });

  // load all required grunt tasks dependencies
  require('load-grunt-tasks')(grunt);

  // load tasks from the grunt tasks dir
  grunt.task.loadTasks(GRUNT_TASKS_PATH);

};
