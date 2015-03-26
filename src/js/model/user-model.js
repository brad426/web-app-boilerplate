define(function (require) {

    "use strict";

    var ServiceMap = require('model/service-map');

    // Define the 'UsersModel'
    var UsersModel = Backbone.Model.extend({

    	url: ServiceMap.endpoint_a,

        initialize: function() {
            
        }
    });

    return UsersModel;    
});