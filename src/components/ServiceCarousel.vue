<template>
<section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      
    </div>
  </section>
</template>

<script>


export default {
  name: 'ServiceCarousel',
  props: {
    msg: String
  },
  components: {
    
  },
  data () {
    return {
        
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
