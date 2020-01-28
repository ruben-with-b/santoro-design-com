<template>
  <div> 
    <Navigation/>
    <div class="nav-border"></div>
    <div class="body-bg contact-bg">
      <contact-form msg="Kontakt"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'contact',
  components: {
    Navigation,
    ContactForm,
    Footer
  }
}
</script>