var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('server:start', 'Start our webapp', function() {
    var conf = {};

    conf = {
      task: {
        script: 'app.js',
        options: {
          cwd: "webapp"
          /*,
          nodeArgs: ['--debug'],
          env: {
            PORT: '1337'
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
            });

            nodemon.on('config:update', function () {
            });

            nodemon.on('restart', function () {
            });
          }
          */
        }
      }
    };

    grunt.config('nodemon', conf);
    grunt.task.run('nodemon');

  });

};