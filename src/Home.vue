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
  },
  metaInfo: {
      title: 'SANTORO Desgin',
      titleTemplate: null,
      meta: [
        {name: 'description', content: 'Website, Corporate Design & Printprodukte für Kleinunterhenmer, Privatpersonen oder mittelständische Unternehmen'},
        { name: 'keywords', content: 'eigene Homepage, Santoro Design, Santoro, Website Enzkreis, Website Karlsruhe, eigenes Logo, Baukasten, Website Baukasten, Portfolio Santoro, Portfolio Ruben, Ruben Santoro,'},
        {property: 'og:title', content: 'SANTORO Design'},
        {property: 'og:site_name', content: 'SANTORO Design'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: 'https://santoro-design.com'},
        {property: 'og:image', content: '/apple-touch-icon.png'},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'Website, Corporate Design & Printprodukte für Kleinunterhenmer, Privatpersonen oder mittelständische Unternehmen'}
      ],
      link: [
        {rel: 'canonical', href: 'https://www.santoro-design.com'}
      ]
    }
}
</script>
