"use strict";

/**
 * Don't instantiate with 'new' keyword.
 * This class returns a single instance of the AnimationHelper.
 */
var AnimationHelper = function() {
}

AnimationHelper.prototype = {

   constructor: AnimationHelper,

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

module.exports = new AnimationHelper();