<template>
    <section class="section webapps-section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">Leistungen <span class="arrow-breadcrumb">&#10230;</span> Websites und Apps</h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen Studenten entstanden sind.
        </p>
        <hooper ref="carousel" :settings="settings" class="sp-carousel">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              width="240px"
              height="480px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              width="200px"
              height="400px"
            />
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile class="mobile-mockup"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              width="240px"
              height="480px"
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
        itemsToShow: 1.2,
        centerMode: true,
        transition: 300,
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
.arrow-breadcrumb{
  transform: translateY(-2px);
  display: inline-block;
}

.mobile-mockup{
  width: 214px;
  margin: 2em 0 0 0;
  border: 7px solid black;
  border-radius: 20px;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  
  .vjs-tech{
    border-radius: 17px;
  }
}

.sp-carousel{
  height: 100%;
  
  & > .hooper-list{
    overflow: visible;
  }
}
</style>
