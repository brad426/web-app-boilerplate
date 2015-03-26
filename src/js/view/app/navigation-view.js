define(function (require) {

    "use strict";

    // Dependencies
    var BaseView = require('view/base-view');
    
    var partial = require('vendor/plugin/require/text!partial/app/navigation-view.html');
    var template = _.template( partial );

    // Define the 'Navigation' view
    var Navigation = BaseView.extend({

        subviews: null,
        events: {},

        initialize: function( options ) {
            this.subviews = {};
            this.render();
        },

        render: function() {
            this.$el.html( template() );
        }
        
    });

    return Navigation;
});