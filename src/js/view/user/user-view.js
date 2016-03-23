var _ = require('underscore');

var BaseView = require('view/base-view');

var partial = require('partial/user/user-view.html');    
var template = _.template( partial );

// Define the 'UserView'
var UserView = BaseView.extend({

    subviews: null,
    events: {},

    /* @override */
    initialize: function( options ) {
        this.subviews = {};
        this.render();
    },

    render: function() {
        var tplData = this.model.toJSON();
        this.$el.html( template(tplData) );
    }
});

module.exports = UserView;