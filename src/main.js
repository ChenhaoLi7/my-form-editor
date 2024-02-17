import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 如果使用Vue Router
import store from './store'; // 如果使用Vuex

Vue.config.productionTip = false;

new Vue({
  router, // 如果使用Vue Router
  store, // 如果使用Vuex
  render: h => h(App),
}).$mount('#app');
