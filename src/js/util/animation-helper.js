define(function (require) {

    "use strict";

    // Don't instantiate with 'new' keyword. This class returns a single instance of the AnimationHelpers
    var AnimationHelpers = function() {
    }

    AnimationHelpers.prototype = {

       constructor: AnimationHelpers,

        forcePaint: function ( el ) {
            el.offsetHeight; // forces repaint
        },

        getTransitionEndEvent: function () {
            var t;
            var el = document.createElement('fakeelement');

            var transitions = {
                'transition'       :'transitionend',
                'Otransitionend'   :'otransitionend',
                'OTransition'      :'oTransitionEnd',
                'MSTransition'     :'msTransitionEnd',
                'MozTransition'    :'transitionend',
                'WebkitTransition' :'webkitTransitionEnd'
            };

            for(t in transitions){
                if( el.style[t] !== undefined ){
                    return transitions[t];
                }
            }
        }
    }
    
    return new AnimationHelpers();
});