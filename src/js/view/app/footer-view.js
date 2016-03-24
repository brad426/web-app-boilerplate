var _ = require('underscore');

var BaseView = require('view/base-view');

var partial = require('partial/app/footer-view.html');
var template = _.template( partial );

// Define the 'Footer' view
var Footer = BaseView.extend({

    subviews: null,
    events: {},

    initialize: function( options ) {
        this.subviews = {};
        this.render();
    },

    render: function() {
        var tplData = { date: new Date().toDateString() };
        this.$el.html( template(tplData) );
    }
    
});

module.exports = Footer;