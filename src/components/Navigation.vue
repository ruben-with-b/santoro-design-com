<template>
  <div>
    <menu-de class="menu-compo"/>
    <div class="nav">
      <nav class="navbar navbar-brand navbar-santoro" role="navigation" aria-label="main navigation">
        <router-link to="/" class="navbar-item logo is-hidden-desktop">
          <icon-base width="55" height="55" viewBox="0 0 140 140" icon-name="logo">
            <icon-logo />
          </icon-base>
        </router-link>
        <router-link to="/" class="navbar-item logo logo-long is-hidden-touch">
          <icon-base width="155" height="84" viewBox="0 0 220 30" icon-name="logo">
            <icon-logo-long />
          </icon-base>
        </router-link>
        <button>
          <a @click="toggleMenu" class="burger-santoro" aria-label="menu" aria-expanded="false">
            <icon-base width="35" height="35" viewBox="0 0 364 263.67" icon-name="menu">
              <icon-menu-de />
            </icon-base>
          </a>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconLogo from '../components/icons/IconLogo.vue'
import IconLogoLong from '../components/icons/IconLogoLong.vue'
import IconMenuDe from '../components/icons/IconMenuDe.vue'
import MenuDe from '../Menu.vue'

export default {
  name: 'navigation',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconLogo,
    IconLogoLong,
    IconMenuDe,
    MenuDe
  },
  methods: {
    toggleMenu () {
      let menu = document.querySelector('.menu-compo');
      menu.style.transform = 'translateX(0)' 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 
</style>
