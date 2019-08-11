<template>
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand navbar-santoro">
        <router-link to="/" class="navbar-item logo">
          <icon-base width="55" height="55" viewBox="0 0 140 140" icon-name="logo">
            <icon-logo />
          </icon-base>
        </router-link>
        <router-link to="/menu" class="burger-santoro" aria-label="menu" aria-expanded="false">
          <icon-base width="35" height="35" viewBox="0 0 364 263.67" icon-name="menu">
            <icon-menu-de />
          </icon-base>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconLogo from '../components/icons/IconLogo.vue'
import IconMenuDe from '../components/icons/IconMenuDe.vue'

export default {
  name: 'navigation',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconLogo,
    IconMenuDe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .navbar-santoro{
    margin: 0 15px;
    justify-content: space-between;
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
}

.burger-santoro:hover {
  background-color: unset;
}
</style>
