<template>
  <div class="nav">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .nav{
    background: yellow;
    width: 100vw;
    height: 100px;
  }
</style>
