var Backbone = require('backbone');
var _ = require('underscore');

/** 
 * Define the 'Base' view
 *
 * All views in this app should extend this base view, rather than the normal Backbone view.
 * Our base view simply defines a destroy method that cleans up a view, by removing
 * event listens and destroying any subviews. Whenever you no longer require a view, call its
 * destroy method.
 * 
 * If your view requires custom cleanup code, override this method, write your custom cleanup
 * code, and then call the original destroy method using:
 * BaseView.prototype.destroy.call(this);
 * 
 * A note on sub-views:
 * Often views contain other sub-views, we commonly store a reference to a view's sub-views by
 * using an object called "subviews" defined on the view. The destroy method will automatically
 * loop through each sub-view, and call its destroy method.
 */
var BaseView = Backbone.View.extend({

    destroy:function() {

        // Destroy nested views
        if(this.subviews) {
            for(var prop in this.subviews) {
                var view = this.subviews[prop];
                if(_.isArray(view)) {
                    for (var i = 0; i < view.length; i++) {
                        view[i].destroy();
                    }
                }
                else {
                    view.destroy();
                }
            }
            
            delete this.subviews;
        }

        // Remove common event listeners
        this.$el.off().unbind();
        this.off();
        this.undelegateEvents();
        this.stopListening();
    }
    
});

module.exports = BaseView;