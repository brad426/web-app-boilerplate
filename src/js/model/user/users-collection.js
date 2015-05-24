define(function (require) {

    "use strict";

    var ServiceMap = require('model/service-map');
    var UserModel = require('model/user/user-model');

    /**
     * Define the 'UsersCollection'
     * This class returns a singleton instance of the collection
     */
    var UsersCollection = Backbone.Collection.extend({

    	model: UserModel,
    	url: ServiceMap.users,

        initialize: function() {
            
        },

        // override
        fetch: function( options ) {

            // Only fetch the data once
            if( this.dataLoaded() ) {
                this.trigger('sync', this, this.toJSON(), options);
                return;
            }

            return Backbone.Collection.prototype.fetch.call(this, options);
        },

        // override
        parse: function( response, options ) {

        	/**
        	 * Perform some action on the data, before models are created, or if
        	 * user's array is not root of response, use parse to return the users array.
        	 * Example:
        	 * return Backbone.Collection.prototype.parse.call(this, response.users, options);
        	 */
            return Backbone.Collection.prototype.parse.call(this, response, options);
        },

        dataLoaded: function() {
        	return this.models.length > 0;
        }
    });

    return new UsersCollection();    
});