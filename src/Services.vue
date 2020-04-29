<template>
  <div id="services"> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'services',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
