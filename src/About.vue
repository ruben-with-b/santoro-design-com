<template>
  <div id="about"> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <AboutSection msg="Über"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'about',
  components: {
    AboutSection,
    Navigation,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.body-bg::before{
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}

</style>
