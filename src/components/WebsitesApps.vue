<template>
    <section class="section webapps-section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">Leistungen <span class="arrow-breadcrumb">&#10230;</span> Websites und Apps</h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen Studenten entstanden sind.
        </p>
        <hooper ref="carouselSp" :settings="settings" class="three-device-carousel">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="desktop-mockup is-hidden-tablet"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="959px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="tablet-mockup is-hidden-tablet"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="666.66px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup is-hidden-desktop"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              posterUrl="sp-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile class="mobile-mockup is-hidden-touch"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              posterUrl="sp-mobile-poster"
              width="250px"
              height="500px"
            />
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" id="sweety-pretty" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" id="sweety-pretty" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
        <h1 class="title title-step is-size-5 is-family-primary">
            Homepage für das Vintage Café Sweety Pretty 
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Das »Sweety Pretty« wurde von einem dreiköpfigem Studenten-Team mit einem eigenen Webauftritt ausgestattet. Die Website
          liefert entscheidende Informationen zum Sortiment und Angebot, sowie gibt erste essenzielle Eindrücke des
          gemütlichen Ambientes im Café.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 100 100" icon-name="wordpress">
            <icon-wordpress />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 256" icon-name="bootstrap">
            <icon-bootstrap />
          </icon-base>
        </div>
        <hooper ref="carouselErinnerungsort" :settings="settings" class="three-device-carousel">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="desktop-mockup is-hidden-tablet"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="959px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="tablet-mockup is-hidden-tablet"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="666.66px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup is-hidden-desktop"
              videoUrl="er-mobile"
              videoType="video/mp4"
              posterUrl="er-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile class="mobile-mockup is-hidden-touch"
              videoUrl="er-mobile"
              videoType="video/mp4"
              posterUrl="er-mobile-poster"
              width="250px"
              height="500px"
            />
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" id="erinnerungsort" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" id="erinnerungsort" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
        <h1 class="title title-step is-size-5 is-family-primary">
            Erinnerungsort 
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Erinnerungsort ist ein Plattform zum Gedenken an Holocaust-Opfer.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 290" icon-name="vue-logo">
            <icon-webpack />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 221" icon-name="vue-logo">
            <icon-vue />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 256" icon-name="mapbox">
            <icon-mapbox />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 307 356" icon-name="greensock-gsap">
            <icon-greensock />
          </icon-base>
        </div>
        <hooper ref="carouselPickMe" :settings="settings" class="one-device-carousel">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup is-hidden-desktop"
              videoUrl="pick-me-mobile"
              videoType="video/mp4"
              posterUrl="pick-me-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile class="mobile-mockup is-hidden-touch"
              videoUrl="pick-me-mobile"
              videoType="video/mp4"
              posterUrl="pick-me-mobile-poster"
              width="250px"
              height="500px"
            />
          </slide>
        </hooper>
        <h1 class="title title-step is-size-5 is-family-primary">
            Pick Me – Deine Packliste
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Mit der Pick Me App können Gepäckstücke wie Koffer und Rucksäcke angelegt und deren Inhalte verwaltet werden.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 290" icon-name="vue-logo">
            <icon-webpack />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 221" icon-name="vue-logo">
            <icon-vue />
          </icon-base>
        </div>





      </div>
    </section>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconWordpress from '../components/icons/IconWordpress.vue'
import IconGreensock from '../components/icons/IconGreensock.vue'
import IconMapbox from '../components/icons/IconMapbox.vue'
import IconVue from '../components/icons/IconVue.vue'
import IconWebpack from '../components/icons/IconWebpack.vue'
import IconBootstrap from '../components/icons/IconBootstrap.vue'
import IconArrowBack from '../components/icons/IconArrowBack.vue'
import {
  Hooper,
  Slide,
} from 'hooper';
import 'hooper/dist/hooper.css';
import VideoMockupMobile from '../components/VideoMockupMobile.vue'

export default {
  name: 'WebsitesApps',
  components: {
    IconBase,
    IconWordpress,
    IconGreensock,
    IconMapbox,
    IconVue,
    IconWebpack,
    IconBootstrap,
    IconArrowBack,
    Hooper,
    Slide,
    VideoMockupMobile
  },
  data () {
    return {
      settings: {
        initialSlide: 2,
        itemsToShow: 0.5,
        centerMode: true,
        transition: 500,
        breakpoints: {
          500: {
            initialSlide: 1 
          },
          1600: {
            initialSlide: 0,
            itemsToShow: 1.5
          }
        }
      },
    }
  },
  methods: {
    slidePrev(event) {
      if (event.target.id === "sweety-pretty") {
        this.$refs.carouselSp.slidePrev();  
      } else if (event.target.id === "erinnerungsort") {
        this.$refs.carouselErinnerungsort.slidePrev();
      }
    },
    slideNext() {
      if (event.target.id === "sweety-pretty") {
        this.$refs.carouselSp.slideNext();  
      } else if (event.target.id === "erinnerungsort") {
        this.$refs.carouselErinnerungsort.slideNext();
      }
    }
  }
}
</script>

<style lang="scss">

</style>
