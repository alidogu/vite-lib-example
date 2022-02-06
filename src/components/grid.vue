<template>
    <canvas ref="canvas" > 
    </canvas>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue';

const svg = ref()
const svgG = ref()
const selector = ref()

// the canvas logic should be done once somewhere else 
var w = 800;
var h = 400;
// grid step
var step = 20; 
var canvasElementId = 'grid';


const canvas = ref();
onMounted(() => {
// this is how you resize the canvas
canvas.value.width  = w;
canvas.value.height = h;

const ctx = canvas.value.getContext('2d');
drawGrid(ctx, w, h, step);
})


// the render logic should be focusing on the rendering 
var drawGrid = function(ctx:any, w:any, h:any, step:any) {
    ctx.beginPath(); 
    for (var x=0;x<=w;x+=step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
    }
    // set the color of the line
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.lineWidth = 1;
    // the stroke will actually paint the current path 
    ctx.stroke(); 
    // for the sake of the example 2nd path
    ctx.beginPath(); 
    for (var y=0;y<=h;y+=step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
    }
    // set the color of the line
    ctx.strokeStyle = 'rgb(20,20,20)';
    // just for fun
    ctx.lineWidth = 5;
    // for your original question - you need to stroke only once
    ctx.stroke(); 
};



</script>