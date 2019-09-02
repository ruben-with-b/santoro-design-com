<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      <h1 class="title is-1 is-family-secondary not-bold title-o-underline t-o-u-main">Legen Sie einen guten Auftritt hin!</h1>
      <div class="morph-section">
        <lottie :options="defaultOptions" :height="100" :width="200" v-on:animCreated="loadAnimation"/>
      </div>
      <p class="is-family-primary has-text-black p-after-h p-anim">
        Zeigen Sie sich Ihren Kunden und lassen Sie Ihre Informationen auffindbar sein.
        Ein unverwechselbarer Look verhilft Ihnen zu einem respektablen
        Erscheinungsbild.
        <br><br>
        Lassen Sie uns gemeinsam Ihre Webseite, App, Flyer oder Visitenkarten angehen!
      </p>
      <div class="columns is-mobile">
        <div class="column is-4 is-offset-6-mobile is-offset-8-tablet is-offset-7-desktop">
          <button class="button button-santoro">
            <router-link to="/services" class="menu-link is-secondary is-family-secondary">
              <div class="arrow-mask">  
                <icon-base class="santoro-arrow" width="1" height="1"
                  viewBox="0 0 616.49 167.02" icon-name="arrow"
                  iconColor="#0a0a0a">
                  <icon-arrow />
                </icon-base>
              </div>
              <span class="has-text-black next-to-icon">Leistungen</span>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'
import Lottie from '../components/animation/LottieBase.vue';
import * as animationData1 from '@/assets/lottie-screens.json';


export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconArrow,
    Lottie,
    'lottie': Lottie
  },
  data () {
    return {
      defaultOptions: {animationData: animationData1.default},
      animationSpeed: 1
    }
  }
}
</script>