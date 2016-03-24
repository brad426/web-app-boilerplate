var _ = require('underscore');

var BaseView = require('view/base-view');

var partial = require('partial/home/home-view.html');    
var template = _.template( partial );

// Define the 'HomeView'
var HomeView = BaseView.extend({

    subviews: null,
    events: {},

    /* @override */
    initialize: function( options ) {
        this.subviews = {};
        this.render();
    },

    render: function() {
        var tplData = {};
        this.$el.html( template(tplData) );
    }
});

module.exports = HomeView;