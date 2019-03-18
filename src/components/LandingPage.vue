<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary">{{ msg }}</h1>
      <h1 class="title is-1 is-family-secondary not-bold">Legen Sie einen guten Auftritt hin!</h1>
      <p class="is-family-primary has-text-black">
        Mit einer sauberen Webseite sind Sie und Ihre Informationen auffindbar.
        <br><br>
        Ein unverwechselbarer und wiedererkennbarer Look verpasst Ihnen endlich
        ein respektables Erscheinungsbild.
        <br><br>
        So einfach ist das!
      </p>
      <div class="columns is-mobile">
        <div class="column is-4 is-offset-8">
          <a class="button is-primary">Leistungen</a>
        </div>
      </div>
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
  line-height: 1.5;
}
</style>
