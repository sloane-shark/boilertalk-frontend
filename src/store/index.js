import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import authentication from './modules/authentication';
import admin from './modules/admin';
import feed from './modules/feed';
import results from './modules/results';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { authentication, admin, feed, results },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    getState: key => Cookies.getJSON(key),
    setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true }),
  })],
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
