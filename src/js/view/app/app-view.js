var Backbone = require('backbone');
var _ = require('underscore');

var BaseView = require('view/base-view');
var HeaderView = require('view/app/header-view');
var FooterView = require('view/app/footer-view');
var LayoutEvent = require('event/layout-events');

var partial = require('partial/app/app-view.html');
var template = _.template( partial );

// Define the 'App' view
var App = BaseView.extend({

    subviews: null,

    events:{
        'click a[href^="/"]': 'routeInternalLinkClicks'
    },

    initialize: function( options ) {

        this.render();

        /*
         * This is a good place to set up views that need to be shown on every route (Eg: header and footer views),
         * as the app view is never removed/re-rendered (Example: as a result of a route change)
         */
        this.subviews = {};
        this.subviews.header = new HeaderView( {el:this.$el.find('[data-role=header-view]')} );
        this.subviews.header = new FooterView( {el:this.$el.find('[data-role=footer-view]')} );
    },

    /**
     * Capture clicks on <a> elements with an internal "href" value.
     * If they are internal and not in the "pass through" list, route them through
     * Backbone's navigate method.
     * When Backbone.history's pushState setting is set to false - Backbone will
     * automatically append a "#" to the route.
     * See: http://artsy.github.io/blog/2012/06/25/replacing-hashbang-routes-with-pushstate/
     *
     * @param  {MouseEvent}
     * @return {Boolean|undefined} false if event default is canceled
     */
    routeInternalLinkClicks: function( e ) {
        var href = e.currentTarget.getAttribute('href')
        // chain 'or's for other black list routes
        var passThrough = href.indexOf('sign_out') >= 0;

        if( ! passThrough ) {
            e.preventDefault();

            var url = href.replace(/^\//,'').replace('\#\!\/','');

            /**
             * If we are using hashbang routes and a modifier key (cmd/shift etc) was
             * used, allow the clicked link to be opened in new window/tab
             */
            if(Backbone.history.options.pushState === false && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) {
                var path = Backbone.history.location.pathname + '#' + url;
                window.open(path, '_blank');
            }
            // Allow Backbone router to handle it
            else {
                // Instruct Backbone to trigger routing events
                Backbone.history.navigate(url, { trigger: true });
            }
        }
    },

    render: function() {
        this.$el.html( template() );
    }
    
});

module.exports = App;