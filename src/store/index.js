import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import admin from './modules/admin';
import feed from './modules/feed';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { authentication, admin, feed },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
