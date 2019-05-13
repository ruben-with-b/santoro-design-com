<template>
  <div class="container is-flex container-menu">
    <router-link to="/" class="navbar-item back-button">
      <icon-base width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
        <icon-arrow-back /> <!-- pls insert white arrow !-->
      </icon-base>
    </router-link>
    <div class="container has-text-centered container-navigation-menu">
      <router-link to="/" class="menu-link ml-one">
        <h1 class="title is-1 is-family-secondary not-bold has-text-white">Home</h1>
      </router-link>
      <router-link to="/about" class="menu-link ml-two">
        <h1 class="title is-1 is-family-secondary not-bold has-text-white">Über</h1>
      </router-link>
      <router-link to="/services" class="menu-link ml-three">
        <h1 class="title is-1 is-family-secondary not-bold has-text-white">Leistungen</h1>
      </router-link>
      <router-link to="/contact" class="menu-link ml-four">
        <h1 class="title is-1 is-family-secondary not-bold has-text-white">Kontakt</h1>
      </router-link>
    </div>
    <footer class="footer footer-menu">
      <div class="columns is-mobile">
        <div class="column is-flex is-one-third">
          <icon-base width="65" height="65" viewBox="0 0 140 140" icon-name="logo">
            <icon-logo />
          </icon-base>
        </div>
        <div class="column is-flex footer-navigation">
          <div class="columns is-mobile is-marginless has-text-centered">
            <div class="column has-text-white">
              Impressum
            </div>
            <div class="column has-text-white">
              Datenschutz
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import IconBase from './components/IconBase.vue'
import IconLogo from './components/icons/IconLogo.vue'
import IconArrowBack from './components/icons/IconArrowBack.vue'

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconLogo,
    IconArrowBack
  }
}
</script>

<style lang="scss" scoped>
.container-menu{
  background: hsl(0, 0%, 4%);
  margin: 0;
  width: 100vw;
  height: 98vh;
}

.container-navigation-menu{
    margin: 9em auto;
}

.title{
  position: relative;
  z-index: 1;
}

.back-button{
  position: absolute;
  left: 0px;
  margin: 30px;
  transform: rotate(180deg);
}

a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:hover,
.navbar-link.is-active {
    background-color: unset;
    color: unset;
}

.router-link-active.menu-link::after,
.menu-link::after{
    content: ' ';
    display: block;
    position: relative;
    top: -37px;
    height: 12px;
    margin-bottom: -12px;
    opacity: 0.6;
    background: #F69F19;
    z-index: 0;
    transform: scaleX(0.0);
    transition: all .3s ease-in-out 0s;
}

.router-link-active.menu-link::after{
  transform: scaleX(1.0);
}

.router-link-active.menu-link.ml-one::after,
.menu-link.ml-one:hover:after{
    width: 70%;
    left: 15%;
}

.router-link-active.menu-link.ml-two::after,
.menu-link.ml-two:hover:after{
    width: 60%;
    left: 20%;
}

.router-link-active.menu-link.ml-three::after,
.menu-link.ml-three:hover:after{
    width: 110%;
    left: -5%;
}

.router-link-active.menu-link.ml-four::after,
.menu-link.ml-four:hover:after{
    width: 90%;
    left: 5%;
}

.menu-link:hover::after{
    content: ' ';
    display: block;
    position: relative;
    top: -37px;
    height: 12px;
    margin-bottom: -12px;
    opacity: 0.6;
    background: #F69F19;
    z-index: 0;
    transform: scaleX(1.0);
}

.footer-menu{
  background: white;
  margin: 0;
  padding: 0;
  height: 15vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
}

.footer-navigation{
  background: #F69F19;
  height: 8em;
  padding: 0;
}

.column, .columns{
  margin: 0 0 0 0;

}

.column.is-flex{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
}

</style>
