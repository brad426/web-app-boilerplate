define(function (require) {

    "use strict";

    // Dependencies
    var BaseView = require('view/base-view');
    var NavigationView = require('view/app/navigation-view');
    
    var partial = require('vendor/plugin/require/text!partial/app/header-view.html');
    var template = _.template( partial );

    // Define the 'Header' view
    var Header = BaseView.extend({

        subviews: null,
        events: {},

        initialize: function( options ) {
            this.subviews = {};
            this.render();
        },

        render: function() {
            this.$el.html( template() );
            // Set up subviews
            this.subviews.navigation = new NavigationView({el: this.$el.find('[data-role=navigation-view]')});
        }
        
    });

    return Header;
});