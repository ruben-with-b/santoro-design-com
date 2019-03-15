<template>
  <section class="section">
      <div class="container">
        <h1>{{ msg }}</h1>
        <h1 class="title is-1 not-bold">Legen Sie einen guten Auftritt hin!</h1>
      </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.not-bold{
  font-weight: 400;
}
.title{
  letter-spacing: 2px;
  line-height: 1.6;
}
</style>
