<template>
  <div id="home">
    <Navigation msg="Navigation"/>
    <img alt="Vue logo" src="./assets/santoro-logo.png">
    <LandingPage msg="Home"/>
    <button class="button is-primary">Send</button>
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
  margin-top: 60px;
}
</style>
