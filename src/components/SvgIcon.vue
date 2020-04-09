<template>
  <div :class="iconSize" class="svg-icon">
    <div v-if="iconType === 'add'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <line
          x1="256"
          y1="112"
          x2="256"
          y2="400"
          style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
        />
        <line
          x1="400"
          y1="256"
          x2="112"
          y2="256"
          style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
    </div>
    <div v-if="iconType === 'chatBox'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M128,464V384H56a24,24,0,0,1-24-24V72A24,24,0,0,1,56,48H456a24,24,0,0,1,24,24V360a24,24,0,0,1-24,24H245.74ZM456,80h0Z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconType: String,
    iconSize: String
  }
};
</script>
