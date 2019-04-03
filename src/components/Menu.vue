<template>
  <section class="section">
    <div class="container container-menu">
      The Menu
    </div>
  </section>
</template>

<script>

export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container-menu{
  background: hsl(0, 0%, 4%);
  width: 100vw;
  height: 100vh;
}

</style>
