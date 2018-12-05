import * as jQuery from 'jquery';
import $ from 'jquery';


;(function($){

    $.fn.afterBefore = function(){

        var th = $(this),
                clipLayout = th.parents('.afterBefore').find('[data-layout=2]'),
                hook = th.parents('.afterBefore').find('.afterBefore__slider'),
                containerWidth = th.width(),
                backgroundPosition = containerWidth/3,
                mouseIsDown = false;

        clipLayout.css({'clip' : 'rect(auto,'+backgroundPosition+'px,auto,auto)'});
        hook.css({'left' : backgroundPosition});
        
        hook.on('mousedown', function(e){
            e.preventDefault();
            mouseIsDown = true;
            
            if(mouseIsDown){
                th.bind('mousemove', function(e){
                    e.preventDefault();
                    var cordX = e.clientX - th.offset().left;
                    clipLayout.css({'clip' : 'rect(auto,'+cordX+'px,auto,auto)'});
                    hook.css({'left' : cordX});
                });
            }
            
        });
        
        $(window).on('mouseup', function(e){
            e.preventDefault();
            mouseIsDown = false;
            th.unbind('mousemove');
        });
        
        th.on('touchmove', function(event){
            
            event.preventDefault();
            event.stopPropagation();
            
            var cordX = event.targetTouches[0].clientX,
                    targetElem = event.target;
            
            if($(targetElem).hasClass('afterBefore__slider-hook') && cordX < containerWidth){
                $(targetElem).parents('.afterBefore__slider').css('left', cordX);
                clipLayout.css({'clip' : 'rect(auto '+cordX+'px auto auto)'});
            }
             
        });




    }


}(jQuery));

$('.afterBefore__inner').afterBefore();

