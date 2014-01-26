define(function() {

		var z,
				test = function(x, y) {
					z = x + y;
					return z;
				};

    var App = function(el) {
    	test(1,2);
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };

    App.prototype.alert = function() {
        this.el.html('require.js up and running!');
    };

    return App;

});
