import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
import Menu from './components/Menu.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

require("./assets/main.scss")

const routes = [
  { path: '/',
    component: Home
  },
  { path: '/menu',
    component: Menu
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