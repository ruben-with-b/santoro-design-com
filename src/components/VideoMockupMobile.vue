<template>  
  <video width="300" height="200" controls="">
      <source :src="videoUrl" :type="videoType">
  </video>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String
    },
    videoType: {
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
.smartphone-mockup, .cls-3 {
  fill: none;
}

.smartphone-mockup {
  stroke: #070707;
  stroke-width: 7px;
}

.cls-2 {
  stroke: none;
}
</style>