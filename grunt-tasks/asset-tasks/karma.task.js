var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.task.renameTask("karma", "_karma");

  grunt.registerTask('karma', "karma unit testing for browser js", function () {
    
    var conf = {};

    conf = {
      task : {
        options: {
          singleRun: true,
          configFile: SETTINGS.GRUNT_TASKS_PATH + '/asset-tasks/karma.conf.js'
        }
      }
    };

    grunt.config('_karma', conf);
    grunt.task.run("_karma");

  });

};