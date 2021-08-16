define([
    'jquery',
    'jquery/ui',
    'domReady!',
], function($){
    'use strict';

    $.widget('mage.searchDropDown', {
        options:{
            dropElement: "",
        },

        _create: function() {
            console.log('Ready');

            var currentElement = $(this.element),
                dropingElement = this.options.dropElement;

            this._on(currentElement, {
                click:function(){
                    $(dropingElement).slideToggle("slow");
                }
            })
        },
    });

    return $.mage.searchDropDown;
})
