<template>
<div id="privacy"> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg">
      <privacy-content/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import PrivacyContent from './components/PrivacyContent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'privacy',
  components: {
    Navigation,
    Footer,
    PrivacyContent
  },
  data(){
    return {

    }
  },
  mounted(){

  },

}
</script>

<style lang="scss">

</style>
