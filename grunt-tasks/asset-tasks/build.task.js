var SETTINGS = require("./../settings");

module.exports = function (grunt) {

  grunt.registerTask('build:dev', "build unminified versions of assets", function () {
    console.log("-------------------------------------------------");
    console.log("build:dev called");
    console.log("-------------------------------------------------");
    // style tasks
    grunt.task.run('clean:styles');
    grunt.task.run('compass:dev');
    
    // script tasks
    grunt.task.run('clean:scripts');
    grunt.task.run('jshint:dev');
    grunt.task.run('karma');
    grunt.task.run('browserify');

    // notes
    grunt.task.run('todos');
  });

  grunt.registerTask('build:dist', "build minified assests for production", function () {
    console.log("-------------------------------------------------");
    console.log("build:dist called");
    console.log("-------------------------------------------------");
    // style tasks
    grunt.task.run('clean:styles');
    grunt.task.run('compass:dist');
    
    // script tasks
    grunt.task.run('clean:scripts');
    grunt.task.run('jshint:dist');
    grunt.task.run('karma');
    grunt.task.run('browserify');
    grunt.task.run('uglify');

    // notes
    grunt.task.run('todos');
  });

};