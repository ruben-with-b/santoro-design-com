<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb">Leistungen <span class="arrow-breadcrumb">&#10230;</span> Websites und Apps</h1>
      <p class="is-family-primary has-text-black p-after-h p-anim">
        Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen Studenten entstanden sind.
      </p>
      <div class="is-flex hcenter">
        <video-mockup-mobile class="mobile-mockup"
          videoUrl="sp-mobile"
          videoType="video/mp4"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import IconBase from '../components/IconBase.vue'
// import IconArrowBack from '../components/icons/IconArrowBack.vue'
import VideoMockupMobile from '../components/VideoMockupMobile.vue'

export default {
  name: 'WebsitesApps',
  components: {
    VideoMockupMobile
  },
  data () {
    return {
        
    }
  },
  methods: {
     
  }
}
</script>

<style lang="scss" scoped>
.arrow-breadcrumb{
  transform: translateY(-2px);
  display: inline-block;
}
.mobile-mockup{
  margin: 2em 0 0 0;
  border: 5px solid black;
  border-radius: 10px;
  box-shadow: 0px 31px 38px -28px rgba(0,0,0,0.41);
}
</style>
