// todo: require -> browserify

var SETTINGS = require('../settings');

module.exports = function(config) {

  if (config.set) config.set({

    // base path, that will be used to resolve files and exclude
    // basePath: './webapp/public/source',
    basePath: "../../" + SETTINGS.SOURCE_PATH,


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      // SETTINGS.SCRIPT_SOURCE_PATH + '/test/test-main.js',
      // {pattern: SETTINGS.SCRIPT_SOURCE_PATH + '/src/*.js', included: false},
      // {pattern: SETTINGS.SCRIPT_SOURCE_PATH + '/src/**/*.js', included: false},
      // {pattern: SETTINGS.SCRIPT_SOURCE_PATH + '/test/**/*Spec.js', included: false}
      {pattern: 'scripts/test/*Spec.js', included: false},
      {pattern: 'scripts/lib/*.js', included: false, served: true},
      {pattern: 'scripts/src/*.js', included: false, served: true},
      'scripts/test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      // 'scripts/src/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],


    // karma coverage
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
    // preprocessors: preprocessors,
    preprocessors: {
      // '**/webapp/public/source/scripts/src/*.js': 'coverage'
      '**/scripts/src/*.js': 'coverage'
    },


    // karma coverage setup
    coverageReporter : {
      dir  : 'scripts/test/coverage',
      reporters: [{
        type: 'html'
      }, {
        type: 'text'
      }]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
