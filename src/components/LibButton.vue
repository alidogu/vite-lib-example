<script setup lang="ts">
import { reactive, ref, onMounted, onUpdated, h,createElementVNode } from 'vue';

interface Props {
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
});
const size = reactive({
  w: 200,
  h: 200
})
const canvas = ref<HTMLCanvasElement>()
const table = ref(null)
const divv = ref<HTMLDivElement>()

const { primary } = reactive(props);

const CanvasManager = function (this: any, w: any, h: any) {
  this.w = w;
  this.h = h;
  this.ctx = null;

  this.setContext = function (ctx: any) {
    this.ctx = ctx;
  }
  this.setSize = function (size: any) {
    this.w += size.w;
    this.h += size.h;
  }
  this.drawGrid = function () {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.w, this.h);
    ctx.stroke();
  }
}

let manager = new (CanvasManager as any)(size.w, size.h);

function grow() {
  size.w += 10
  size.h += 10
  manager.setSize(size);
}

function draw() {
  manager.drawGrid(4, 4, 1, 'black');
}
const a1 = document.createElement("span");
a1.innerHTML = "span"
onMounted(() => {
  console.log("canvas", canvas.value)
  console.log("table", table.value)
  if (canvas.value)
    manager.setContext(canvas.value.getContext('2d'));
  draw();

  if (divv.value)
    divv.value.appendChild(a1);
})

onUpdated(() => {
  draw();
});
</script>

<template>
  <div>
    <div ref="divv"></div>
    <button @click="grow">Grow</button>
    <canvas
      ref="canvas"
      :width="size.w"
      :height="size.h"
      tabindex="0"
      style="border:1px solid #000000;"
    ></canvas>
    <table ref="table">
      <tr>
        <th>BB</th>
        <th>BB</th>
        <th>BB</th>
      </tr>
      <tr>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
      </tr>
      <tr>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
      </tr>
      <tr>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
      </tr>
      <tr>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
        <td>asd</td>
      </tr>
    </table>
  </div>
</template>
 