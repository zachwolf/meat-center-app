var _ = require('underscore'),
    settings = {};

// Grunt settings
settings.GRUNT_TASKS_PATH  = "./grunt-tasks";

// Localhost settings
settings.SERVER_PORT = 1337; // 2 cool
settings.SERVER_PATH = "./webapp";

// source settings
settings.SOURCE_PATH = "./webapp/public/source";
settings.STYLE_SOURCE_PATH  = settings.SOURCE_PATH + "/styles";
settings.SCRIPT_SOURCE_PATH = settings.SOURCE_PATH + "/scripts";
settings.MARKUP_SOURCE_PATH = null;

// build settings
settings.BUILD_PATH        = "./webapp/public/build";
settings.STYLE_BUILD_PATH  = settings.BUILD_PATH  + "/styles";
settings.SCRIPT_BUILD_PATH = settings.BUILD_PATH  + "/scripts";
settings.MARKUP_BUILD_PATH = null;

// hint settings
settings.JSHINT_BASE_SETTINGS = {
    "bitwise"  : false,
    "curly"    : true,
    "eqeqeq"   : true,
    "forin"    : true,
    "freeze"   : true,
    "latedef"  : true,
    "newcap"   : true,
    "noarg"    : true,
    "noempty"  : true,
    "nonew"    : true,
    "plusplus" : true,
    "undef"    : true,
    "unused"   : "vars",
    "strict"   : true,
    "trailing" : true
  };

settings.JSHINT_DEV_SETTINGS = _.extend({
    "debug"   : true,
    "globals" : {
      "requirejs" : true,
      "describe"  : true,
      "console"   : true,
      "define"    : true,
      "expect"    : true,
      "window"    : true,
      "alert"     : true,
      "it"        : true
    }
  }, settings.JSHINT_BASE_SETTINGS);

settings.JSHINT_DIST_SETTINGS = _.extend({
    "globals" : {
      "requirejs" : true,
      "define"    : true,
      "window"    : true
    }
  }, settings.JSHINT_BASE_SETTINGS);

settings.JSHINT_SERVER_SETTINGS = _.extend({
    "globals" : {
      "__dirname" : true,
      "exports"   : true,
      "require"   : true,
      "console"   : true,
      "module"    : true
    }
  }, settings.JSHINT_BASE_SETTINGS);

module.exports = settings;
