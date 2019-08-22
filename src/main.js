import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
// import Menu from './Menu.vue'
import About from './About.vue'
import Legal from './Legal.vue'
import Privacy from './Privacy.vue'
import VShowSlide from 'v-show-slide'
import smoothscroll from 'smoothscroll-polyfill';


Vue.use(VueRouter)
Vue.use(VShowSlide)
Vue.config.productionTip = false

require("./assets/main.scss")
smoothscroll.polyfill()

const routes = [
  { path: '/',
    name: 'home',
    component: Home
  },
  // { path: '/menu',
  //   name: 'menu',
  //   component: Menu
  // },
  { path: '/about',
    name: 'about',
    component: About
  },
  { path: '/legal',
    name: 'legal',
    component: Legal
  },
  { path: '/privacy',
    name: 'privacy',
    component: Privacy
  }
];

export const router = new VueRouter({
  routes, // routes: routes
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')