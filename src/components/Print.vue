<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">
          <router-link to="/services">Leistungen </router-link>
          <span class="arrow-breadcrumb">&#10230;</span> Flyer, Einladungen und mehr...
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen Studenten entstanden sind.
        </p>
        <div class="tile is-ancestor invitation-tile">
          <div class="tile is-parent is-8">
            <div class="tile inner-tile wedding-card-out is-child is-flex hcenter vcenter"></div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile inner-tile hcenter is-child vcenter is-flex">
              Hochzeitseinladungen
            </div>
            <div class="tile inner-tile hcenter vcenter is- child is-flex">
              der VW-Bus
            </div>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <div class="tile inner-tile is-child is-flex hcenter vcenter">
              anderes Element
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile inner-tile hcenter is-child vcenter is-flex">
              Hochzeitseinladung A&M Innen
            </div>
          </div>
        </div>

      </div>
    </section>      
  </div>  
</template>

<script>
// import IconBase from '../components/IconBase.vue'
// import IconArrow from '../components/icons/IconArrow.vue'
// import IconArrowBack from '../components/icons/IconArrowBack.vue'


export default {
  name: 'Print',
  components: {
    // IconBase,
    // IconArrow,
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
  .invitation-tile{
    margin-top: 3em !important;
  }

  .inner-tile{
    background-color: #fafaf1;
    height: 35em;
    width: 100%;
  }
</style>
