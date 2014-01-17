
var util = require('util'),
		express = require('express'),
    app = express();

// console.log(util.inspect(app.use, { showHidden: true, depth: null }));

console.log("started");

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
    // res.send("hello world!");
});

/*app.get(/^(.+)$/, function(req, res) {
	console.log("-------------------------------------------------");
	console.log("hi");
	console.log("-------------------------------------------------");
	res.sendfile(__dirname + "/public/" + req.params[0]);
});*/

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

// export app so grunt can start the server
// module.exports = app;
app.listen(1337);
// app.listen(SETTINGS.SERVER_PORT)
// var foo = app.listen(1337);
// module.exports = foo;

/*

app.listen(1337);
console.log('Express server started on port 1337');

*/