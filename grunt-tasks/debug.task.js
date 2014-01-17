var util     = require('util'),
		SETTINGS = require("./globalSettings");

module.exports = function (grunt) {

  grunt.registerTask('debug', "throw away function for debugging", function () {
		// console.log(util.inspect(require, { showHidden: true, depth: null }));
    // grunt.file.write("test.txt", util.inspect(grunt, { showHidden: true, depth: null }));
    console.log("-------------------------------------------------");
    // console.log(util.inspect(require("../" + SETTINGS.SERVER_PATH + '/app.js'), { showHidden: true, depth: null }));
    console.log("hi");
    console.log("-------------------------------------------------");
  });

};