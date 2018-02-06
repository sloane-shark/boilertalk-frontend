import Vue from 'vue';
import moment from 'vue-moment';
import App from './App';
import router from './router';
import store from './store';

Vue.use(moment);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
