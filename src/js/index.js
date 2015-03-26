require(
    [ 'app', 'router', 'view/app/app-view' ],
    function ( App, Router, AppView ) {

    	// Set up the main app view
        var appView = new AppView( {el:'[data-role=app]'} );
        
        // Create a new instance of the router to kick off the app
        var router = new Router();
    }
);