import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import Services from './Services.vue'
import Contact from './Contact.vue'
import Legal from './Legal.vue'
import Privacy from './Privacy.vue'
import VShowSlide from 'v-show-slide'
import smoothscroll from 'smoothscroll-polyfill';
import VueAnime from 'vue-animejs';

Vue.use(VueRouter)
Vue.use(VShowSlide)
Vue.use(VueAnime)
Vue.config.productionTip = false

require("./assets/main.scss")
smoothscroll.polyfill()

const routes = [
  { path: '/',
    name: 'home',
    component: Home
  },
  { path: '/about',
    name: 'about',
    component: About
  },
  { path: '/services',
    name: 'services',
    component: Services
  },
  { path: '/contact',
    name: 'contact',
    component: Contact
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