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
    requirejs: {
      compile: {
        options: {
          name: "app",
          baseUrl: SETTINGS.SCRIPT_SOURCE_PATH,
          mainConfigFile: SETTINGS.SCRIPT_SOURCE_PATH + "/app.js",
          out: SETTINGS.SCRIPT_BUILD_PATH + "/app.js"
        }
      }
    }
  });

  // load all required grunt tasks dependencies
  require('load-grunt-tasks')(grunt);

  // load tasks from the grunt tasks dir
  grunt.task.loadTasks(GRUNT_TASKS_PATH);
  grunt.task.loadTasks(GRUNT_TASKS_PATH + '/asset-tasks');

};
