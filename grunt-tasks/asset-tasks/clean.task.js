var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('clean:styles', "clear out build style directory", function () {
    
    var conf = {};

    conf = {
      task : [ SETTINGS.STYLE_BUILD_PATH ]
    };

    grunt.config('clean', conf);
    grunt.task.run("clean");

  });

  grunt.registerTask('clean:scripts', "clear out build script directory", function () {
    
    var conf = {};

    conf = {
      task : [ SETTINGS.SCRIPT_BUILD_PATH ]
    };

    grunt.config('clean', conf);
    grunt.task.run("clean");

  });

};