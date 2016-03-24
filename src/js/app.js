// Polyfills
require('vendor/request-animation-frame-polyfill');
require('vendor/console');

var _ = require('underscore');
var Backbone = require('backbone');
var TemplateHelper = require('util/template-helper');
var TrackingHelper = require('util/tracking-helper');

var app = {};

/**
 * app modes. Typically 'dev', 'stag' or 'prod'
 * This value is changed during build - see the 'scripts' gulp task
 */
app.mode = 'dev';

// Internationalisation and localisation
app.language = 'en';

app.noop = function(){};

// An event dispatcher for global pub/sub events.
app.ctx = _.extend( {}, Backbone.Events );

// Set up a shortcut to the tracker object
app.tracker = TrackingHelper;

// Set up a shortcut to template helper functions
app.tplFns = TemplateHelper;

/*
 * Specify a single variable name for data being passed into our underscore templates.
 * This can significantly improve the speed at which a template is able to render.
 * See: http://underscorejs.org/#template
 */
_.templateSettings.variable = 'data';

module.exports = app;