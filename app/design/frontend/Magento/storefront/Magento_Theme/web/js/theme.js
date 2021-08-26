
define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    var header = $('.header.content');

    let scrolledBool = true;

    $(window).scroll(function () {
        // Header Sticky
        if ($(this).scrollTop() > header.outerHeight() && $(this).width() >=768) {
            header.addClass('fixed');
            $('.page-wrapper').css("marginTop", header.outerHeight());
        }
        if ($(this).scrollTop() === 0 ){
            header.removeClass('fixed');
            $('.page-wrapper').css("marginTop","0");
        }
    });
});
