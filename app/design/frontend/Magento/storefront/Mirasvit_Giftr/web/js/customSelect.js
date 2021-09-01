define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function($){
    'use strict';

    $.widget('mage.customSelect', {
        options: {
            optionsContainer: '',
            optionsList: '',
            selected: ''
        },

        _create: function(){
            const optionsContainer = this.options.optionsContainer;
            const optionsList = this.options.optionsList;
            const selected = this.options.selected;

            $(selected).on('click', function(){
               $(optionsContainer).toggleClass('active');
            });

            optionsList.each(option => {
                $(option).on('click', function(){
                    $(selected).html($(option + " label").html());
                    $(optionsContainer).removeClass('active');
                })
            });
        }
    });

    return $.mage.customSelect;
})
