import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '@style/reset.css';
import '@style/border.css';
import 'swiper/dist/css/swiper.css';
import '@style/iconfont.css';

Vue.config.productionTip = false
fastclick.attach(document.body); // 解决300毫秒点击延迟
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
