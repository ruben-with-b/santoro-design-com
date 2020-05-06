<template>
    <section class="section webapps-section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">Leistungen <span class="arrow-breadcrumb">&#10230;</span> Websites und Apps</h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen Studenten entstanden sind.
        </p>
        <hooper ref="carousel" :settings="settings" class="sp-carousel">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="desktop-mockup is-hidden-tablet"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              width="959px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="tablet-mockup is-hidden-tablet"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              width="666.66px"
              height="500px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup is-hidden-desktop"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile class="mobile-mockup is-hidden-touch"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              width="250px"
              height="500px"
            />
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
      </div>
    </section>
</template>

<script>
import IconBase from '../components/IconBase.vue'
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
    IconArrowBack,
    Hooper,
    Slide,
    VideoMockupMobile
  },
  data () {
    return {
      settings: {
        initialSlide: 1,
        itemsToShow: 0.5,
        centerMode: true,
        transition: 500,
      },
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    }
  }
}
</script>

<style lang="scss">

</style>
