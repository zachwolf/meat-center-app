requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(function () {

    "use strict";

    console.log("-------------------------------------------------");
    console.log("App started.");
    console.log("-------------------------------------------------");


	var app = "hi";

	return app;

});
