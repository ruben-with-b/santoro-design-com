<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      <h1 class="title is-1 is-family-secondary not-bold title-o-underline">Legen Sie einen guten Auftritt hin!</h1>
      <p class="is-family-primary has-text-black p-after-h p-anim">
        Mit einer sauberen Webseite sind Sie und Ihre Informationen auffindbar.
        Ein unverwechselbarer und wiedererkennbarer Look verpasst Ihnen endlich
        ein respektables Erscheinungsbild.
        <br><br>
        So einfach ist das!
      </p>
      <div class="columns is-mobile">
        <div class="column is-4 is-offset-6-mobile is-offset-8-tablet is-offset-7-desktop">
          <button>
            <router-link to="/services" class="menu-link button button-santoro is-secondary is-family-secondary">
              <div class="arrow-mask">  
                <icon-base class="santoro-arrow" width="1" height="1" viewBox="0 0 616.49 167.02" icon-name="arrow">
                  <icon-arrow />
                </icon-base>
              </div>
              <span class="has-text-black next-to-icon">Leistungen</span>
            </router-link>
          </button>
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

</style>
