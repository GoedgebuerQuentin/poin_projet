import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filter from './plugins/filters'

Vue.config.productionTip = false

Vue.use(filter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
