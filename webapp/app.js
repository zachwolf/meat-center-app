/*
- logout
- login
- view / search db
- new entry
*/

var util = require('util'),
		express = require('express'),
    app = express();

console.log(util.inspect(app.use, { showHidden: true, depth: null }));

module.exports = app;


app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

/*

app.listen(1337);
console.log('Express server started on port 1337');

*/