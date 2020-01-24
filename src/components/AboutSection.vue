<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      <Person/>
      <Project/>
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
.section{
  padding-bottom: 0;
}
</style>
