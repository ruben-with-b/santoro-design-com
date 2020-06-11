<template>
  <footer class="footer">
    <div class="content">
      <div class="is-size-7 has-text-white is-flex vcenter footer-body">
        <p class="is-marginless">&#169; 2020 <span class="is-uppercase">Santoro</span> Design</p>
        <div>
          <a href="https://github.com/ruben-with-b" target="_blank">
            <icon-base width="15" height="15" viewBox="0 0 32.58 31.77"
              class="github-logo" icon-name="Github">
              <icon-github />
            </icon-base>
          </a>
          <button v-show="scrolled" class="scroll-top-button 
          is-family-secondary" @click="scrollToTop()">
            <span class="is-hidden-mobile">nach oben &nbsp; &nbsp;</span>
            <icon-base class="acc-arrow" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
              <icon-short-arrow/>
            </icon-base>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconShortArrow from '@/components/icons/IconShortArrow.vue'
import IconGithub from '@/components/icons/IconGithub.vue'

export default {
  name: 'footer',
  components: {
    IconBase,
    IconShortArrow,
    IconGithub
  },
  data() {
    return {
      scrolled: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll () {
      if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
      this.scrolled = true
    }
    },
    scrollToTop () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
