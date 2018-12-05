import $ from 'jquery';
let fancybox = require('fancybox')($);

$(document).ready(function () {
    $('.fancybox-link-iframe').fancybox({
        type: 'iframe'
    });
    
    $('.fancybox-link-image').fancybox({
        type: 'image'
    });
    
    $('.fancybox-link-swf').fancybox({
        type: 'inline'
    });
});



