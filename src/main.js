import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Home),
}).$mount('#home')
