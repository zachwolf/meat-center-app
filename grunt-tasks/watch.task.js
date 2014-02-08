var SETTINGS = require("./settings");

module.exports = function(grunt) {

  // configure prompt task
  grunt.registerTask('watch', 'prompt for starting server', function () {
    var conf = {};
    
    conf = {
      task: {
        options: {
          questions: [
            {
              config: 'options.startServer',
              type: 'confirm',
              default: true,
              message: 'Start local server?'
            }
          ],
          then: function(results){
            if( results['options.startServer'] ) {
              // run server and asset tasks
              grunt.task.run('concurrent:all');
            } else {
              // watch assets only
              grunt.task.run('watch:assets');
            }
          }
        }
      }
    };

    grunt.config('prompt', conf);
    grunt.task.run('prompt');

  });

};