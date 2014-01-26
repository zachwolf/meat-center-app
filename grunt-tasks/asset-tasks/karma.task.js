var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('karma:unit', "karma unit testing for browser js", function () {
    
    var conf = {};

    conf = {
      task : {
        options: {
          singleRun: true,
          configFile: SETTINGS.GRUNT_TASKS_PATH + '/asset-tasks/karma.conf.js'
        }
      }
    };

    grunt.config('karma', conf);
    grunt.task.run("karma");

  });

};