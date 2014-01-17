
var util = require('util'),
		express = require('express'),
    app = express();

// console.log(util.inspect(app.use, { showHidden: true, depth: null }));

console.log("-------------------------------------------------");
console.log("app.js called");
console.log("-------------------------------------------------");

app.get('/', function(req, res){
	console.log("app.get('/')");
  res.sendfile(__dirname + '/public/index.html');
  // res.send("hello world!");
});


app.get(/^(.+)$/, function(req, res) {
	console.log("app.get asset");
	res.sendfile(__dirname + "/public/" + req.params[0]);
});



app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});


if ( process.execArgv[0] === "--standalone" ) {
	// start in line when we're not running things through grunt
	module.exports.app = app.listen(1337);
} else {
	// export app so grunt can start the server
	module.exports.app = app;
}