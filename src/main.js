import Vue from 'vue'
// import App from './App.vue'
import './plugins/element.js'
import HelloWorld from '../src/components/HelloWorld.vue'
import create from "@/utils/create";

// import router from './router'
import router from './krouter'

// import store from './store'
import store from './kstore'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()
// 注册
Vue.prototype.$create = create

new Vue({
  router,
  store,
  render: h => h(HelloWorld)
}).$mount('#app')
