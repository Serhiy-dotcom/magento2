var config = {
    paths: {
        slick: 'js/plugins/slick',
        select: 'js/plugins/select2.full',
        'accordionPath': 'js/accordion',
        'sliderPath': 'js/slider',
        'selectPath': 'js/select',
        'giftrPath': 'js/giftr'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        select: {
            deps: ['jquery']
        }
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'js/itemMixin': true
            }
        }
    }
};
