var SETTINGS = require("./settings"),
    exec     = require('child_process').exec;

module.exports = function (grunt) {

  grunt.registerTask('concurrent:all', 'run and watch our server and our assets at the same time', function () {
    var conf = {};

    // enable input while task is watching
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (data) {

      data = (data + '').trim().toLowerCase();
   
      // log todos
      if (data === "todos") {
        exec( 'grunt todos', function(error, stdout, stderror) {
          if(error) throw error;
          console.log("stdout", stdout);
        });
      }
   
      // reset built asset files
      if (data === "reset_build") {
        exec( 'grunt reset_build', function(error, stdout, stderror) {
          if(error) throw error;
          console.log("stdout", stdout);
        });
      }
    });

    // configure concurrent tasks
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