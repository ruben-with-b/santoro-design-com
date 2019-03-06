<template>
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="#">
          <icon-base width="65" height="65" viewBox="0 0 140 140" icon-name="logo">
            <icon-logo />
          </icon-base>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <icon-base width="35" height="35" viewBox="0 0 364 263.67" icon-name="menu">
            <icon-menu-de />
          </icon-base>
        </a>
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
 .navbar-brand{
    margin: 0 15px;
}
 .navbar-burger {
    display: flex;
    align-items: center;
    height: 6.25rem;
}

.navbar-burger:hover {
  background-color: unset;
}
</style>
