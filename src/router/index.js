import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/containers/Login';
import Feed from '@/containers/Feed';
import FeedSettings from '@/containers/admin/FeedSettings';
import Results from '@/containers/admin/Results';
import Researchers from '@/containers/admin/Researchers';

Vue.use(Router);

const verifyResearcher = (to, from, next) => {
  if (!store.state.authentication.loggedIn) {
    next('/');
  }
  next();
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/admin/feed',
      name: 'FeedSettings',
      component: FeedSettings,
      beforeEnter: verifyResearcher,
    },
    {
      path: '/admin/results',
      name: 'Results',
      component: Results,
      beforeEnter: verifyResearcher,
    },
    {
      path: '/admin/researchers',
      name: 'Researchers',
      component: Researchers,
      beforeEnter: verifyResearcher,
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
