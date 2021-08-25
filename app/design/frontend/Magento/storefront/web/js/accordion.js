define([
    'jquery',
    'jquery/ui',
    'collapsible',
    'matchMedia',
    'domReady!',
], function($){
    'use strict';

    $.widget('mage.accordion', {
        options:{
            currentElement: "",
            collapsibleOptions: {
                active: [0],
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration: "1000",
                },
            },
        },

        _create: function() {
            var currentElement = $(this.element);

            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(currentElement).collapsible( "disable" );
                    $(currentElement).collapsible( "destroy" );
                }.bind(this),
                exit: function () {
                    $(currentElement).collapsible(this.options.collapsibleOptions);
                }.bind(this),
            });
        },
    });

    return $.mage.accordion;
})
