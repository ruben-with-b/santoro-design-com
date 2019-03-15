<template>
  <div id="home">
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <LandingPage msg="Home"/>
    </div>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Navigation from './components/Navigation.vue'


export default {
  name: 'home',
  components: {
    LandingPage,
    Navigation
  }
}
</script>

<style lang="scss">

#home {
  
}

</style>
