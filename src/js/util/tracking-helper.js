/**
 * Don't instantiate with 'new' keyword.
 * This class returns a single instance of the tracking helper.
 */
var TrackingHelper = function() {
    
}

TrackingHelper.prototype = {

    constructor: TrackingHelper,

    trackEvent: function(category, action, label, value) {
        ga('send', 'event', category, action, label, value);
    },

    trackVPage: function(name) {
        name = name.replace(/\!/g, '');
        ga('send', 'pageview', name + '.html');
    }
}

module.exports = new TrackingHelper();