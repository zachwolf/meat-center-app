var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('server:start', 'Start a web server', function() {
    var conf = {};

    conf = {
      task: {
        script: 'app.js',
        options: {
          cwd: "webapp",
          // nodeArgs: ['--debug'],
          // env: {
          //   PORT: '5455'
          // },
          // omit this property if you aren't serving HTML files and 
          // don't want to open a browser tab on start
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log("------------------  nodemon log  --------------------");
              console.log(arguments);
              console.log("------------------ /nodemon log  --------------------");
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              console.log("------------------  nodemon config:update  --------------------");
              console.log(arguments);
              console.log("------------------ /nodemon config:update  --------------------");

              // setTimeout(function() {
              //   require('open')('http://localhost:5455');
              // }, 1000);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function () {
              console.log("------------------  nodemon restart  --------------------");
              console.log(arguments);
              console.log("------------------ /nodemon restart  --------------------");

              // Delay before server listens on port
              // setTimeout(function() {
              //   require('fs').writeFileSync('.grunt/rebooted', 'rebooted');
              // }, 1000);
            });
          }
        }
      }
    };

    grunt.config('nodemon', conf);
    grunt.task.run('nodemon');

  });

};