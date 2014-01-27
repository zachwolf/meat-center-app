var util     = require('util'),
    SETTINGS = require("./settings"),
    fs       = require('fs');

var spawn = require('child_process').spawn,
    ls;

var exec = require('child_process').exec;

    // exec     = require('child_process').exec;

module.exports = function (grunt) {

  grunt.registerTask('debug', "throw away function for debugging", function () {
    console.log("------------------  grunt debug  --------------------");

    // var done = this.async();
    var done = this.async();
    exec( 'cd webapp', function(error, stdout, stderror) {
      // ls = spawn('node', ["app.js"]);
      ls = spawn('pwd');

      ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
      });

      ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
      });

      ls.on('close', function (code) {
        console.log('child process exited with code ' + code);
        done();
      });

    

    // workingish

    

    // exec( 'cd webapp; node app.js', function(error, stdout, stderror) {
      if(error) throw error;
      console.log("stdout", stdout);
      console.log("stderror", stderror);
    });
    

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