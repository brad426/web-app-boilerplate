var _ = require('underscore');

var BaseView = require('view/base-view');
var UserView = require('view/user/user-view');

var partial = require('partial/user/users-list-view.html');    
var template = _.template( partial );

// Define the 'UsersListView'
var UsersListView = BaseView.extend({

    subviews: null,
    events: {},

    /* @override */
    initialize: function( options ) {
        this.subviews = {};

        this.render();

        this.listenTo(this.collection, 'sync', this.onCollectionDataUpdated);
        this.listenTo(this.collection, 'change', this.onCollectionModelChanged);
        this.collection.fetch();
    },

    /**
     * Called when a model in the collection values are changed
     */
    onCollectionModelChanged: function( model ) {
        
    },

    /**
     * Collection data has been read or saved the server
     */
    onCollectionDataUpdated: function( collection, response ) {
        this.render();
    },

    render: function() {
        var tplData = {
            isLoading: this.collection.dataLoaded() === false,
            users: this.collection.toJSON()
        };
        this.$el.html( template(tplData) );

        // Find all the user-view stubs, and instantiate a new UserView for each one
        this.subviews.userViews = [];
        var userViewEls = this.$el.find('[data-role=user-view]');
        for (var i = 0; i < userViewEls.length; i++) {
            var view = new UserView({el:userViewEls[i], model:this.collection.models[i]});
            this.subviews.userViews.push(view);
        }
    }
});

module.exports = UsersListView;