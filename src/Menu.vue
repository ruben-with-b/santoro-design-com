<template>
  <div>
    <div class="container is-flex container-menu">
      <a @click="toggleMenu" class="navbar-item back-button">
        <icon-base width="40" height="40" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
          <icon-arrow-back />
        </icon-base>
      </a>
      <div class="container has-text-centered container-navigation-menu">
        <router-link to="/" class="menu-link ml-one" exact>
          <h1 class="title is-1 is-family-secondary not-bold has-text-white">Home</h1>
        </router-link>
        <router-link to="/about" class="menu-link ml-two" exact>
          <h1 class="title is-1 is-family-secondary not-bold has-text-white">Über</h1>
        </router-link>
        <router-link to="/services" class="menu-link ml-three" exact>
          <h1 class="title is-1 is-family-secondary not-bold has-text-white">Leistungen</h1>
        </router-link>
        <router-link to="/contact" class="menu-link ml-four" exact>
          <h1 class="title is-1 is-family-secondary not-bold has-text-white">Kontakt</h1>
        </router-link>
      </div>
    </div>
    <footer class="footer footer-menu">
      <div class="columns footer-body is-mobile">
        <div class="footer-logo column is-flex is-one-third">
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
  name: 'menu',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconLogo,
    IconArrowBack
  },
  methods: {
    toggleMenu () {
      let menu = document.querySelector('.menu-compo');
      menu.style.transform = 'translateX(100vw)'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-menu{
  background: #0a0a0a;
  margin: 0;
  width: 100vw;
  height: 85vh;
}

.container-navigation-menu{
    margin: 11em auto 0 auto;
}

.title{
  position: relative;
  z-index: 1;
}

.back-button{
  position: absolute;
  left: 0px;
  margin: 3em;
  transform: rotate(180deg);
}

a.navbar-item:hover,
a.navbar-item.router-link-exact-active,
.navbar-link:hover,
.navbar-link.router-link-exact-active {
    background-color: unset;
    color: unset;
}

.menu-link.router-link-exact-active:after,
.menu-link:after{
    content: '';
    display: block;
    position: relative;
    top: -33px;
    height: 12px;
    margin-bottom: -12px;
    opacity: 0.75;
    background: #F69F19;
    z-index: 0;
    transform: scaleX(0.0);
    transition: all .3s ease-in-out;
}

.menu-link:after{
    opacity: 0.25;
    background: #FFF;
    z-index: 0;
    transform: scaleX(0.0);
    transition: all .3s ease-in-out;
}

.menu-link:hover:after,
.menu-link.router-link-exact-active:after{
    content: '';
    transform: scaleX(1.0);
}

.menu-link.ml-one.router-link-exact-active:after,
.menu-link.ml-one:hover:after{
    width: 70%;
    left: 15%;
}

.menu-link.ml-two.router-link-exact-active:after,
.menu-link.ml-two:hover:after{
    width: 60%;
    left: 20%;
}

.menu-link.ml-three.router-link-exact-active:after,
.menu-link.ml-three:hover:after{
    width: 110%;
    left: -5%;
}

.menu-link.ml-four.router-link-exact-active:after,
.menu-link.ml-four:hover:after{
    width: 90%;
    left: 5%;
}

.footer-menu{
  margin: 0;
  padding: 0;
  width: 100vw;
  position: absolute;
}

.footer-body{
  height: 15vh;
}

.footer-logo{
  background: #FFF;
}

.footer-navigation{
  background: #F69F19;
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
