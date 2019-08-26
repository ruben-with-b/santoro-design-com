<template>
  <svg id="screen-morph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 68.94">
    <title>santoro-animation</title>
    <path id="Poster-Frame" class="styles-1" d="M75.25,72.2H31.81V9H75.25Z" transform="translate(-6.03 -5.89)"/>
    <path id="Headline-1" class="styles-1" d="M44.47,27.61H62.59" transform="translate(-6.03 -5.89)"/>
    <path id="Headline-2" class="styles-1" d="M50.74,36.58H62.59" transform="translate(-6.03 -5.89)"/>
    <path id="Page-Top" class="styles-1" d="M36.5,20h27" transform="translate(-6.03 -5.89)"/>
    <path id="Flyer" class="styles-1" d="M74.49,20.42V72l-41.76.3-.16-55.8m36.37-1.57.1-6-35.94,7" transform="translate(-6.03 -5.89)"/>
    <path id="Smartphone" class="styles-1" d="M66.75,67.84H40.31V13.39H66.75Z" transform="translate(-6.03 -5.89)"/>
    <path id="Button" class="styles-1" d="M53.25,57.84h1" transform="translate(-6.03 -5.89)"/>
    <path id="Screen" class="styles-1" d="M89.12,54.42H18V15.37H89.12Z" transform="translate(-6.03 -5.89)"/>
    <path id="Keyboard" class="styles-2" d="M8.53,65.87h90" transform="translate(-6.03 -5.89)"/>
    <path id="Desktop" class="styles-1" d="M94.53,56.17h-82v-45h82Z" transform="translate(-6.03 -5.89)"/>
    <path id="Desktop-Stand" class="styles-2" d="M66.5,69.9,53,67.29,39.56,70.06" transform="translate(-6.03 -5.89)"/>
  </svg>
</template>

<script>

import { TimelineMax } from "gsap/TweenMax";

let tl = new TimelineMax({
    paused:false,
    repeat:-1,
    yoyo:true,
    repeatDelay:1,
    delay:2
});

tl.to('#Desktop', 2, {
  morphSVG:{shape:'#Screen'},
  // ease:Power4.easeInOut
})
.to('#Desktop-Stand', 2, {
  morphSVG:{shape:'#Keyboard'}
  // ,ease:Power4.easeInOut
},'-=2')

export default {
    
}
</script>

<style lang="scss" scoped>

#Desktop-Stand, #Desktop{
    visibility: visible;
}

.styles-1,.styles-2{
    fill:none;
    stroke:#000;
    stroke-linecap:square;
    stroke-width:5px;
}
.styles-1{
    stroke-miterlimit:10;
}
.styles-2{
    stroke-linejoin:bevel;
}
</style>