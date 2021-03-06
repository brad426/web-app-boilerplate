// Set up our global app object
window.app = require('app');

var Router = require('router');
var AppView = require('view/app/app-view');

// Set up the main app view
var appView = new AppView( {el:'[data-role=app]'} );

// Create a new instance of the router to kick off the app
var router = new Router();