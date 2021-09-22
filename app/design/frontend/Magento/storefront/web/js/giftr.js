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
            $('.giftr-list').modal(this.options.modalOptions)
        }
    })

    return $.mage.giftr;
})
