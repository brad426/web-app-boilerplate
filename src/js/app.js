define(function (require) {

    // Polyfills
    require('vendor/request-animation-frame-polyfill');
    require('vendor/console');

    // Require.js plugins
    require('vendor/plugin/require/text');

    // Jquery and its plug-ins
    require('vendor/jquery.min');
    require('vendor/plugin/jquery/jquery.placeholder');    

    // Frameworks
    var _ = require('vendor/underscore.min');
    var Backbone = require('vendor/backbone.min');

    // Helpers
    var TemplateHelpers = require('util/template-helper');
    var TrackingHelper = require('util/tracking-helper');

    // Set up our global app object
    window.app = window.app || {};

    /**
     * app modes. Typically 'dev', 'stag' or 'prod'
     * Can be changed during build - see the 'set-runtime-app-mode' gulp task
     */
    app.mode = 'dev';
    
    // Internationalisation and localisation
    app.language = 'en';

    app.noop = function(){};

    // An event dispatcher for global pub/sub events.
    app.ctx = _.extend( {}, Backbone.Events );

    /*
     * Specify a single variable name for data being passed into our underscore templates.
     * This can significantly improve the speed at which a template is able to render.
     * See: http://underscorejs.org/#template
     */
    _.templateSettings.variable = 'data';

    // Set up a shortcut to the singleton tracker object
    app.tracker = TrackingHelper;

    return window.app;
});