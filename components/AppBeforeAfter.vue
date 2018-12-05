<template>
<div class="afterBefore">
    <div class="afterBefore__inner">
        <div class="afterBefore__layout" data-layout="1">
            <img src="/img/ab-1.jpg" alt="">
        </div>
        <div class="afterBefore__layout" data-layout="2"></div>
        <div class="afterBefore__slider" @mousedown.prevent="beforeAfter" @touchstart.prevent="beforeAfter">
            <div class="afterBefore__slider-hook"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        beforeAfter (e) {
            let thumb = e.currentTarget;
            let container = thumb.parentElement;
            let layout = document.querySelector('[data-layout="2"]');

            let thumbCoords = getCoords(thumb);
            let shiftX = e.pageX - thumbCoords.left;
            let containerCoords = getCoords(container);

            document.onmousemove = function(e) {
                let newLeft = e.pageX - shiftX - containerCoords.left;

                if (newLeft < 0) {
                    newLeft = 0;
                }
                let rightEdge = container.offsetWidth - thumb.offsetWidth;
                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }


                thumb.style.left = newLeft + 'px';
                layout.style.clip = 'rect(auto,' + newLeft + 'px, auto, auto)';
            }

            document.ontouchmove = function(e) {
                
                let newLeft = e.targetTouches[0].pageX;
                if (newLeft < 0) {
                    newLeft = 0;
                }
                let rightEdge = container.offsetWidth - thumb.offsetWidth;
                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }

                thumb.style.left = newLeft + 'px';
                layout.style.clip = 'rect(auto,' + newLeft + 'px, auto, auto)';
            }

            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            };

            document.ontouchend = function() {
                document.ontouchmove = document.ontouchend = null;
            };

            

            function getCoords(elem) {
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };

            }
        }
    }
}
</script>

<style lang="scss">
.afterBefore {
    position: relative;
    max-width: 840px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 15px rgba(#000, 0.15);
}

.afterBefore__inner {
    position: relative;
    overflow: hidden;
}

[data-layout="1"] {
    position: relative;
    z-index: 1;
}

[data-layout="2"] {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: top center;
    background-size: 100%;
    background-image: url(/img/ab-2.jpg);
    clip: rect(auto, 200px, auto, auto);
}

.afterBefore__slider {
    position: absolute;
    z-index: 3;
    width: 10px;
    top: 0;
    bottom: 0;
    background: #fff;
    cursor: pointer;
    left: 200px;
    .afterBefore__slider-hook {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background-image: url(/img/arrows.png);
        background-color: #fff;
        background-position: center center;
        background-size: cover;
        margin-left: -30px;
        margin-top: -30px;
    }
    @media screen and (max-width: 767px) {
        .afterBefore__slider-hook {
            width: 40px;
            height: 40px;
            margin-left: -20px;
            margin-top: -20px;

        }
    }
}
</style>
