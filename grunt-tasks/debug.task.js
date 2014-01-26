var util     = require('util'),
    SETTINGS = require("./settings"),
    fs       = require('fs');

module.exports = function (grunt) {

  grunt.registerTask('debug', "throw away function for debugging", function () {
    console.log("------------------  grunt debug  --------------------");
    console.log("debug");
    console.log("------------------ /grunt debug  --------------------");
  });

};

// console.log(util.inspect(require, { showHidden: true, depth: null }));
// grunt.file.write("test.txt", util.inspect(grunt, { showHidden: true, depth: null }));

/*

// grunt async tasks

var done = this.async();

fs.openSync('./test.txt', 'w');
console.log('successfully created test.txt');
setTimeout(function () {
  fs.unlinkSync('./test.txt');
  console.log('successfully deleted test.txt');
  done();

}, 2000);

*/