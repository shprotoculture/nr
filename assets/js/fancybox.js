import $ from 'jquery';
require('fancybox')($);


$('.fancybox-link-iframe').fancybox({
    type: 'iframe'
});

$('.fancybox-link-image').fancybox({
    type: 'image'
});

$('.fancybox-link-swf').fancybox({
    type: 'inline'
});