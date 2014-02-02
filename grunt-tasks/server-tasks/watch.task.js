var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('watch:server', 'watch our server files for changes', function () {
    var conf = {};

    conf = {
      options: { livereload: true },
      // test our code on file change
      styles: {
        files: [
          SETTINGS.SERVER_PATH + '/*.js',
          SETTINGS.SERVER_PATH + '/**/*.js',
          "!" + SETTINGS.SERVER_PATH + '/public/**/*'
        ],
        tasks: [
          'jshint:server',
          'test:server'
        ]
      }
    };

    grunt.config('watch', conf);
    grunt.task.run('watch');
  });
};