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

            $(document).on('click', selected, function(){
                $(optionsContainer).toggleClass('active');

                $(selected).toggleClass('rotateArrow');
            });

            $(document).on('click', `${optionsContainer} > label${optionsList}`, function(e){
                $(selected).html(e.currentTarget.lastElementChild.textContent);
                $(optionsContainer).removeClass('active');
            })
        }
    });

    return $.mage.customSelect;
})
