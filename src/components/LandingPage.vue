<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      <h1 class="title is-1 is-family-secondary not-bold">Legen Sie einen guten <span class="title-o-underline">Auftritt hin!</span></h1>
      <p class="is-family-primary has-text-black p-after-h">
        Mit einer sauberen Webseite sind Sie und Ihre Informationen auffindbar.
        <br><br>
        Ein unverwechselbarer und wiedererkennbarer Look verpasst Ihnen endlich
        ein respektables Erscheinungsbild.
        <br><br>
        So einfach ist das!
      </p>
      <div class="columns is-mobile">
        <div class="column is-4 is-offset-6">
          <a class="button button-santoro is-secondary is-family-secondary" href="#">
            <div class="arrow-mask">  
              <icon-base class="santoro-arrow" width="25" height="25" viewBox="0 0 616.49 167.02" icon-name="arrow">
                <icon-arrow />
              </icon-base>
            </div>
            <span class="has-text-black next-to-icon">Leistungen</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconArrow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.button.is-family-secondary{
  letter-spacing: 0.6px;
  margin: 40px 0 0 0;
}

</style>
