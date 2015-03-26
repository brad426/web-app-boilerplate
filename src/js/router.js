define(function (require) {

    "use strict";

    // Dependencies
    var app = require('app');
    var HomeView = require('view/home/home-view');

    var Router = Backbone.Router.extend({

        routes: {
            'users'                        : 'users',
            'home'                        : 'home',
            ''                            : 'home',
            '*default'                    : 'notFound'
        },

        currentView: null,

        initialize: function () {
            this.routeContentEl = $('[data-role=route-content-view]');
            Backbone.history.start( {pushState: false} );
        },

        // Called whenever a route matches and its corresponding callback is about to be executed.
        execute: function(callback, args) {

            this.cleanup();

            // Middleware
            // Check if user has appropriate permissions to access route(Backbone.history.fragment) etc...

            if (callback) callback.apply(this, args);
        },

        home: function() {
            this.currentView = new HomeView( {el: this.routeContentEl} );
        },

        notFound: function() {
           $(this.routeContentEl).html('We couldn\'t find what you were looking for...');
        },

        cleanup: function() {
            // Cleanup the view that is currently being displayed, as we will be replacing it
            if(this.currentView) this.currentView.destroy();
            this.currentView = null;
            this.routeContentEl.empty();
        },

    });

    return Router;

});