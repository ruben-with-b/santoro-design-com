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
        <a @click="toggleMenu" class="burger-santoro" aria-label="menu" aria-expanded="false">
          <icon-base width="35" height="35" viewBox="0 0 364 263.67" icon-name="menu">
            <icon-menu-de />
          </icon-base>
        </a>
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

 .navbar-santoro{
    margin: 0 15px;
    justify-content: space-between;
    height: 6.28em;
}
 .burger-santoro {
  display: flex;
  color: #0a0a0a;
  align-items: center;
  height: 6.25rem;
  padding: 0.5rem 0.35rem;
}

.logo{
  padding: 0.5rem 0.35rem;
  color: #0a0a0a;
}

.logo-long{
  margin: 0 auto;
}

.burger-santoro:hover {
  background-color: unset;
}

.menu-compo{
  position: fixed;
  z-index: 100;
  transform: translateX(100vw);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
