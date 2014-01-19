
var util    = require('util'),
		express = require('express'),
    app     = express(),
		exphbs  = require('express3-handlebars');

// console.log(util.inspect(app.use, { showHidden: true, depth: null }));
hbs = exphbs.create({
    defaultLayout: 'main',
    // helpers      : helpers,

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        // 'shared/templates/',
        'views/partials/'
    ]
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.logger('dev'));

app.get('/', function(req, res){
  res.render('home');
  // res.sendfile(__dirname + '/public/index.html');
});

app.get(/^(.+)$/, function(req, res) {
	res.sendfile(__dirname + "/public/" + req.params[0]);
});

// app.get('/user/:id', loadUser, function(req, res){
//   res.send('Viewing user');
// });

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

if ( process.execArgv[0] === "--standalone" ) {
	// start in line when we're not running things through grunt
	console.log("standalone");
	module.exports.app = app.listen(1337);
} else {
	// export app so grunt can start the server
	module.exports.app = app;
}

console.log("-------------------------------------------------");
console.log("app.js called");
console.log("-------------------------------------------------");
