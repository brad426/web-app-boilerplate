// Polyfills
require('vendor/request-animation-frame-polyfill');
require('vendor/console');

var _ = require('underscore');
var Backbone = require('backbone');
var TemplateHelper = require('util/template-helper');
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

// Set up a shortcut to template helper functions
app.tplFns = TemplateHelper;

console.log(app);

module.exports = app;