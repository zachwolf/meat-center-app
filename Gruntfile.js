// task settings
var SETTINGS = require( "./grunt-tasks/settings" );

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    karma: {
      unit: {
        singleRun: true,
        configFile: 'karma.conf.js'
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
  grunt.task.loadTasks(SETTINGS.GRUNT_TASKS_PATH);
  grunt.task.loadTasks(SETTINGS.GRUNT_TASKS_PATH + '/asset-tasks');
  grunt.task.loadTasks(SETTINGS.GRUNT_TASKS_PATH + '/server-tasks');

};
