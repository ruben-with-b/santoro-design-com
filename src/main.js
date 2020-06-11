import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import Services from './Services.vue'
import ServiceCarousel from './components/ServiceCarousel'
import WebsitesApps from './components/WebsitesApps'
import Print from './components/Print'
import CorporateDesign from './components/CorporateDesign'
import Contact from './Contact.vue'
import Legal from './Legal.vue'
import Privacy from './Privacy.vue'
import VShowSlide from 'v-show-slide'
import smoothscroll from 'smoothscroll-polyfill';
import VueAnime from 'vue-animejs';
import Hotjar from 'vue-hotjar'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VShowSlide)
Vue.use(VueAnime)
Vue.use(Hotjar, {
  id: '1826275',
  isProduction: true,
})

Vue.config.productionTip = true;


require("./assets/main.scss");
require('dotenv').config();
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
    component: Services,
    children: [
      {
        path: '',
        component: ServiceCarousel
      },
      {
        path: 'websites-and-apps',
        component: WebsitesApps
      },
      {
        path: 'print',
        component: Print
      },
      {
        path: 'corporate-design',
        component: CorporateDesign
      },
    ]
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
