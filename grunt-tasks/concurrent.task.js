var SETTINGS = require("./settings");

module.exports = function (grunt) {

  grunt.registerTask('concurrent:all', 'run and watch our server and our assets at the same time', function () {
    var conf = {};

    conf = {
      task: ['concurrent:server', 'watch:assets'],
      options: {
        logConcurrentOutput: true
      }
    };

    grunt.config("concurrent", conf);
    grunt.task.run('concurrent');
  });

};