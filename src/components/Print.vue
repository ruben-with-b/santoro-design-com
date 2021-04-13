<template>
  <div>
    <section class="section print-section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">
          <router-link to="/services" class="breadcrumb-link">Leistungen</router-link>
          <span class="arrow-breadcrumb">&#10230;</span> Flyer, Einladungen und mehr...
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Karten, Einladungen und Flyer sind immer noch eine gute und greifbare Möglichkeit, um Ihren Liebsten oder
          oder Ihren Kunden etwas besonderes vorzustellen oder zu erzählen.
        </p>
        <div class="tile is-ancestor invitation-tile">
          <div class="tile is-parent is-8">
            <div class="tile inner-tile wedding-card-out is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile tile-title inner-tile is-child vcenter is-flex is-hidden-mobile">
              <h1 class="is-family-secondary is-size-4-tablet is-size-2-desktop">
                Hochzeits-<br>
                einladungen
              </h1>
            </div>
            <div class="tile vw-bus inner-tile hcenter vcenter is- child is-flex"></div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile wedding-card wedding-flower inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile wedding-card-in wedding-card inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
        </div>
        <div class="tile is-ancestor flyer-tile">
          <div class="tile is-parent is-8">
            <div class="tile ibc17-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile tile-title inner-tile is-child vcenter is-flex is-hidden-mobile">
              <h1 class="is-family-secondary is-size-4-tablet is-size-2-desktop">
                Flyer<br>
                und Karten
              </h1>
            </div>
            <div class="tile guitar-tile inner-tile hcenter vcenter is- child is-flex"></div>
          </div>
        </div>
        <div class="tile is-ancestor flyer-tile">
          <div class="tile is-parent is-4">
            <div class="tile smd-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile ibc16-tile inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
        </div>
        <div class="tile is-ancestor flyer-tile">
          <div class="tile is-parent is-7">
            <div class="tile mm-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile danke-tile inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
        </div>
        <div class="contact-teaser">
        <p class="is-family-secondary p-after-h p-infographic">
            Was für Sie dabei?<br>
            Gehen wir's an!
        </p>
        <button class="button button-santoro-white">
        <router-link to="/contact" class="menu-link is-secondary is-family-secondary">
          <div class="arrow-mask">  
            <icon-base class="santoro-arrow" width="1" height="1"
              viewBox="0 0 616.49 167.02" icon-name="arrow"
              iconColor="#FFFFFF">
              <icon-arrow />
            </icon-base>
          </div>
          <span class="next-to-icon">Kontakt</span>
        </router-link>
      </button>
    </div>
      </div> 
    </section>      
  </div>  
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'
// import IconArrowBack from '../components/icons/IconArrowBack.vue'


export default {
  name: 'Print',
  components: {
    IconBase,
    IconArrow
    // IconArrowBack
  },
  data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    // if route
    let bg = document.querySelector('.body-bg');
    bg.classList.add('pure-bg');
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>

  .contact-teaser{
    opacity: 1;
  }

</style>
