import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './Router/router';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
