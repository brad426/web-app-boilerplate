"use strict";

/**
 * Don't instantiate with 'new' keyword.
 * This class returns a single instance of the AnimationHelper.
 */
var AnimationHelper = function() {
    this.cache = {};
}

AnimationHelper.prototype = {

   constructor: AnimationHelper,

    forcePaint: function ( el ) {
        el.offsetHeight; // forces repaint
    },

    transitionEnd: function () {

        if(this.cache.transitionEnd) return this.cache.transitionEnd;

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
            if( el.style[t] !== undefined ) {
                this.cache.transitionEnd = transitions[t];
                return this.cache.transitionEnd; 
            }
        }
    }
}

module.exports = new AnimationHelper();