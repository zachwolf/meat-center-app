var SETTINGS = require("./globalSettings"),
    SERVER   = require("../" + SETTINGS.SERVER_PATH + '/app.js'),
    instance;

module.exports = function (grunt) {

  grunt.registerTask('server:start', 'Start a web server', function() {
    console.log("-------------------------------------------------");
    console.log('Started web server on port ' + SETTINGS.SERVER_PORT);
    console.log("-------------------------------------------------");
    instance = SERVER.listen(SETTINGS.SERVER_PORT);
  });

  grunt.registerTask('server:stop', "watch for changes in the node server", function () {
    console.log("-------------------------------------------------");
    console.log("server:stop called");
    console.log("instance", instance);
    console.log("SERVER", SERVER);
    console.log("-------------------------------------------------");
    SERVER.close();
  });


  // grunt.registerTask('server:watch', "watch for changes in the node server", function () {
  //   console.log("-------------------------------------------------");
  //   console.log("server:stop called");
  //   console.log("-------------------------------------------------");

  //   var conf = {};

  //   conf = {
  //     // reload the page when things change
  //     options: { livereload: true },
  //     // process js on change
  //     scripts: {
  //       files: [
  //         SETTINGS.SCRIPT_SOURCE_PATH + '/*.js',
  //         SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js'
  //       ],
  //       tasks: [
  //         'server:restart'
  //       ]
  //     },
  //     // compile html business
  //     markup: {
  //       files: [
  //         SETTINGS.MARKUP_SOURCE_PATH + '/*.haml',
  //         SETTINGS.MARKUP_SOURCE_PATH + '/**/*.haml'
  //       ],
  //       tasks: [
  //         'buildMarkup'
  //       ]
  //     }
  //   };

  //   grunt.config('watch', conf);
  //   grunt.task.run("watch");

  // });


  grunt.registerTask('server:restart', "watch and build local to :dev settings", function () {
    console.log("-------------------------------------------------");
    console.log("server:restart called");
    console.log("-------------------------------------------------");
    grunt.task.run("server:stop");
    // grunt.task.run("server:start");
  });

};