<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      <Person/>
      <Project/>
      <!--
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
      -->
    </div>
  </section>
</template>

<script>
import Person from '../components/Person.vue'
import Project from '../components/Project.vue'

export default {
  name: 'AboutSection',
  props: {
    msg: String
  },
  components: {
    Person,
    Project
  },
  data () {
    return {
      featuresOpen: false
    }
  },
  methods: {
    toggleFeatures () {
      this.featuresOpen = !this.featuresOpen
      let arrow = document.querySelector('.acc-arrow')
      arrow.classList.toggle('up')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
