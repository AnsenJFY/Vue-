import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import './assets/style/reset.css';
import './assets/style/border.css';

Vue.config.productionTip = false
fastclick.attach(document.body); // 解决300毫秒点击延迟

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
