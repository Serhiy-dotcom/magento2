define([
    'jquery',
    'jquery/ui',
    'Magento_Ui/js/modal/modal',
    'domReady!'
], function($) {
    'use strict';

    $.widget('mage.giftr', {
        options:{
            modalOptions: {
                type:'popup',
                responsive: true,
                modalClass: 'modal-giftr'
            }
        },

        _create: function(){
            this._on('.giftr-link', {
                click: this._handleClick
            })
        },

        _handleClick: function(e){
            e.preventDefault();

            $(this.element).modal(this.options.modalOptions)

            $(this.element).modal('openModal');
        }
    })

    return $.mage.giftr;
})
