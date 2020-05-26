<template>
  <div id="legal"> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <imprint-content/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import ImprintContent from './components/ImprintContent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'legal',
  components: {
    Navigation,
    ImprintContent,
    Footer
    
  }
}
</script>

<style lang="scss" scoped>

</style>
