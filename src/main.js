import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
import Menu from './Menu.vue'
import About from './About.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

require("./assets/main.scss")

const routes = [
  { path: '/',
    component: Home
  },
  { path: '/menu',
    component: Menu
  },
  { path: '/about',
    component: About
  }
];

const router = new VueRouter({
  routes, // routes: routes
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')