<template>
  <div id="home"> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <LandingPage msg="Home"/>
    </div>
    <Footer/>
  </div>
</template>

<script>

import LandingPage from './components/LandingPage.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'home',
  components: {
    LandingPage,
    Navigation,
    Footer
  }
}
</script>
