<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">
          <router-link to="/services" class="breadcrumb-link">Leistungen</router-link>
          <span class="arrow-breadcrumb">&#10230;</span>  Logos und Corporate Design
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Ein Logo gibt Ihnen Wiedererkennungswert, auf großen Flächen oder in kleinen
          Ecken, ob gedruckt oder digital. Wenn Sie dann auch noch ein komplettes Corporate Design verpasst bekommen,
          dann treten Sie als starke Einheit auf.
        </p>
        <div class="tile is-ancestor cds-tile">
          <div class="tile is-parent is-4">
            <div class="tile ludd-logo-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile vk-ludd-tile inner-tile hcenter is-child vcenter is-flex">
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-8">
            <div class="tile cd-brecht-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile logo-brecht inner-tile hcenter is-child vcenter is-flex">
  
            </div>
            <div class="tile vk-brecht-tile inner-tile hcenter vcenter is- child is-flex"></div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile duo-logo-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile cd-duo-tile inner-tile hcenter is-child vcenter is-flex">
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile supply-logo-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent is-4">
            <div class="tile finance-logo-tile inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile mm-logo-tile inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
        </div>
         <div class="tile is-ancestor">
          <div class="tile is-parent is-8">
            <div class="tile vk-santoro-tile inner-tile is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-parent">
            <div class="tile santoro-logo-tile inner-tile hcenter is-child vcenter is-flex"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="contact-teaser">
        <p class="is-family-secondary p-after-h p-infographic">
            Lust auf ähnliches?<br>
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
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'

export default {
  name: 'CorporateDesign',
  components: {
    IconBase,
    IconArrow
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
