// todo: better task name
// todo: better task description

var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('do:server', 'run and watch our server at the same time', function () {
    var conf = {};

    conf = {
      task: ['server:start', 'watch:server'],
      options: {
        logConcurrentOutput: true
      }
    };

    grunt.config("concurrent", conf);
    grunt.task.run('concurrent');
  });

};