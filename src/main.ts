import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/router/index';
import '@/assets/styles/index.styl';
import store from '@/store';
import '@/plugins/element';
import '@/plugins/axios';
import '@/api/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
