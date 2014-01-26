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

define(['app', 'jquery', 'rap'], function (App, $, Rap) {
    var app = new App($('body'));
    var rap = new Rap($('body'));
    app.render();
    rap.render();
});
