// todo? copy source/scripts/lib

var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  // alias task name
  grunt.task.renameTask("browserify", "_browserify");

  grunt.registerTask('browserify', "compile JS", function () {
    
    var conf = {
      task: {
        files: {}
      }
    };

    // example file
    conf.task.files[ SETTINGS.SCRIPT_BUILD_PATH + "/src/b.js" ] = SETTINGS.SCRIPT_SOURCE_PATH + "/src/b.js";

    grunt.config('_browserify', conf);
    grunt.task.run("_browserify");

  });

};