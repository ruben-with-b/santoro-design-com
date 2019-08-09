<template>
  <footer class="footer">
    <div class="content">
      <p class="is-size-7 has-text-white ">
        &#169; 2019 <span class="is-uppercase">Santoro</span> Design
        <button class="scroll-top-button is-pulled-right"
        @click="scrollToTop(0, 1500, 'easeInOutQuint')">
          <icon-base class="acc-arrow" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
            <icon-short-arrow/>
          </icon-base>
        </button>
      </p>
    </div>
  </footer>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconShortArrow from '@/components/icons/IconShortArrow.vue'

export default {
  name: 'footer',
  components: {
    IconBase,
    IconShortArrow
  },
  methods: {
    scrollToTop () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.acc-arrow{
  position: relative;
  transform: rotate(-90deg);
}

.scroll-top-button:hover > .acc-arrow{
  color: #F69F19;
}

</style>
