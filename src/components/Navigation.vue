<template>
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="#">
          <icon-base width="75" height="75" icon-name="logo">
            <icon-logo />
          </icon-base>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconLogo from '../components/icons/IconLogo.vue'

export default {
  name: 'navigation',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconLogo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .navbar-item.logo{
    margin: 0 0 0 20px;
  }
</style>
