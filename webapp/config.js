/*jslint node: true */
"use strict";

var secrets = require('../../secrets'),
		path    = require('path');

module.exports.secrets = secrets;

function rootPath (name) {
	return path.resolve(__dirname, name);
}

module.exports.rootPath = rootPath;

// port number
module.exports.port = 1337;
