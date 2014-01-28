var SETTINGS = require("./settings");

module.exports = function (grunt) {

  grunt.task.renameTask("open", "_open");

  grunt.registerTask('open', "open files in Chrome", function () {
    
    var conf = {};

    conf = {
      task : {
        path: 'http://localhost:' + SETTINGS.SERVER_PORT,
        app: 'Google Chrome'
      }
    };

    grunt.config('_open', conf);
    grunt.task.run("_open");

  });

};