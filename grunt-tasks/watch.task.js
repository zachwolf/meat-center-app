var SETTINGS = require("./settings");

module.exports = function(grunt) {

  grunt.registerTask('watch', '', function () {
    
    var conf = {};

    conf = {
      task : {
      }
    };

    grunt.config('todo', conf);
    grunt.task.run("todo");

  });

};