var _ = require('underscore');

var BaseView = require('view/base-view');

var partial = require('partial/app/navigation-view.html');
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

module.exports = Navigation;