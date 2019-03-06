<template>
  <div id="home">
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <img alt="Santoro logo" src="./assets/santoro-logo-short.png">
      <LandingPage msg="Home"/>
      <button class="button is-primary">Send</button>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

</style>
