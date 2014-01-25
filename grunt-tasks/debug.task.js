var util     = require('util'),
    SETTINGS = require("./settings"),
    fs       = require('fs');

module.exports = function (grunt) {

  grunt.registerTask('debug', "throw away function for debugging", function () {
    // console.log(util.inspect(require, { showHidden: true, depth: null }));
    // grunt.file.write("test.txt", util.inspect(grunt, { showHidden: true, depth: null }));
    var done = this.async();


    console.log("-------------------------------------------------");
    // console.log(util.inspect(require("../" + SETTINGS.SERVER_PATH + '/app.js'), { showHidden: true, depth: null }));
    fs.openSync('./test.txt', 'w');
    console.log('successfully created test.txt');
    setTimeout(function () {
      fs.unlinkSync('./test.txt');
      console.log('successfully deleted test.txt');
      done();

    }, 2000);

    console.log("hi");
    console.log("-------------------------------------------------");
  });

};