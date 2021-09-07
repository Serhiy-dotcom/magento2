define([
    'jquery',
    'jquery/ui',
    'domReady!',
], function($){
    'use strict';

    $.widget('mage.closeBurger', {
        options:{
            closeElement: "",
        },

        _create: function() {
            var currentElement = $(this.element),
                closingElement = this.options.closeElement;

            this._on(currentElement, {
                click:function(){
                    $(closingElement).removeClass("nav-before-open nav-open");
                }
            })
        },
    });

    return $.mage.closeBurger;
})
