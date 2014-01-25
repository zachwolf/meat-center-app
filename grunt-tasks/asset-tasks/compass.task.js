var SETTINGS = require("./../settings"),
    fs       = require('fs'),
    createConfig,
    deleteConfig;

createConfig = function () {
  fs.openSync('./config.rb', 'w');
};

deleteConfig = function () {
  fs.unlinkSync('./config.rb');
};


module.exports = function (grunt) {

  grunt.registerTask('compass:dev', "build local to :dev settings", function () {
    // console.log("------------------  compass:dev  --------------------");
    
    var conf = {};

    conf = {
      task : {
        options: {
          sassDir : SETTINGS.STYLE_SOURCE_PATH,
          cssDir  : SETTINGS.STYLE_BUILD_PATH,
          outputStyle : 'expanded',
          watch : false
        }
      }
    };

    // create a config.rb file for compass
    createConfig();

    // run compass
    grunt.config('compass', conf);
    grunt.task.run("compass");

    // delete config.rb file for compass
    deleteConfig();

    // console.log("------------------ /compass:dev  --------------------");
  });

  grunt.registerTask('compass:dist', "build local to :dist settings", function () {
    // console.log("------------------  compass:dist  --------------------");
    
    var conf = {};

    // clear out styles directory, or files won't be rebuilt with alternative settings
    grunt.task.run("clean:styles");

    conf = {
      task : {
        options: {
          sassDir : SETTINGS.STYLE_SOURCE_PATH,
          cssDir  : SETTINGS.STYLE_BUILD_PATH,
          outputStyle : 'compressed',
          noLineComments: true,
          watch : false
        }
      }
    };

    // create a config.rb file for compass
    createConfig();

    // run compass
    grunt.config('compass', conf);
    grunt.task.run("compass");

    // delete config.rb file for compass
    deleteConfig();

    // console.log("------------------ /compass:dist  --------------------");
  });

};