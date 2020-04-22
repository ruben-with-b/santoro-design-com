<template>
  <div class="service-section">
    <hooper ref="carousel" group="group1" :settings="settingsCarousel" class="topic-carousel">
      <slide class="slide-topic one"></slide>
      <slide class="slide-topic two"></slide>
      <slide class="slide-topic three"></slide>
    </hooper>
    <hooper ref="carousel" group="group1" :settings="settingsHeadline" class="headline-carousel">
      <slide>
        <h1 class="hl-car is-size-4-touch is-size-3-desktop is-family-secondary
            not-bold">Websites <br>und Apps</h1>
      </slide>
      <slide>
         <h1 class="hl-car is-size-4-touch is-size-3-desktop is-family-secondary
            not-bold">Flyer und<br> Einladungen</h1>
      </slide>
      <slide>
         <h1 class="hl-car is-size-4-touch is-size-3-desktop is-family-secondary
            not-bold">Logos und<br>Corporate Design</h1>
      </slide>
    </hooper>
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-tablet is-offset-one-third-tablet is-offset-two-thirds-fullhd">
            <p class="is-family-primary has-text-black p-after-h p-anim p-car">
              Werfen Sie einen Blick auf die Arbeitsproben und überzeugen Sie sich
              selbst.
            </p>
          </div>
        </div>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrowBack from '../components/icons/IconArrowBack.vue'
import {
  Hooper,
  Slide,
  // Pagination as HooperPagination,
  // Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'ServiceCarousel',
  components: {
    IconArrowBack,
    IconBase,
    Hooper,
    Slide,
    // HooperPagination,
    // HooperNavigation
  },
  data () {
    return {
        settingsCarousel: {
          infiniteScroll: true,
          transition: 900,
          touchDrag: false
        },
        settingsHeadline: {
          infiniteScroll: true,
          transition: 1400,
          touchDrag: false
        }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
