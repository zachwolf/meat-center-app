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


    /*

    compass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          noLineComments: true
        }
      },
      dev: {
        options: {
          sassDir : SETTINGS.STYLE_SOURCE_PATH,
          cssDir  : SETTINGS.STYLE_BUILD_PATH,
          outputStyle: 'expanded',
          watch: false
        }
      }
    },

    */

};


// var conf = {};

// console.log("watch:dev called");

// // clean out and recompile all of BUILD_PATH
// grunt.task.run("build:dev");

// // start a local server
// // grunt.task.run("server:start");
// grunt.task.run("open:local");

// conf = {
//   // reload the page when things change
//   options: { livereload: true },
//   // process style sheets on change
//   styles: {
//     files: [
//       SETTINGS.STYLE_SOURCE_PATH + '/*.scss',
//       SETTINGS.STYLE_SOURCE_PATH + '/**/*.scss'
//     ],
//     tasks: [
//       'compass:dev'
//     ]
//   },
//   // process js on change
//   scripts: {
//     files: [
//       SETTINGS.SCRIPT_SOURCE_PATH + '/*.js',
//       SETTINGS.SCRIPT_SOURCE_PATH + '/**/*.js'
//     ],
//     tasks: [
//       'jshint:dev',
//       'karma:unit',
//       'copy:scripts'
//     ]
//   },
//   // compile html business
//   markup: {
//     files: [
//       SETTINGS.MARKUP_SOURCE_PATH + '/*.handlebars',
//       SETTINGS.MARKUP_SOURCE_PATH + '/**/*.handlebars'
//     ],
//     tasks: [
//       'copy:markup'
//     ]
//   }
// };

// grunt.config('watch', conf);
// grunt.task.run("watch");