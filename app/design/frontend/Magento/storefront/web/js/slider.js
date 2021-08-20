define([
    'jquery',
    'jquery/ui',
    'slick',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('mage.slider', {
        options: {
            selector:"",
            sliderOptions:{
                infinite: true,
                prevArrow: '<div class="slick-prev custom__prev ">Prev</div>',
                nextArrow: '<div class="slick-next custom__next ">Next</div>'
            }
        },

        _create: function () {
            console.log(`Ready slider - ${this.options.selector}`);

            $(this.options.selector).slick(this.options.sliderOptions);


        },
    });

    return $.mage.slider;
});
