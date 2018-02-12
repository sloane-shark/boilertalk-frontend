<template lang="pug">
nav.navbar.is-info(role='navigation' aria-label='main navigation')
  .container
    button.button.navbar-burger
      span
      span
      span
    .navbar-menu
      .navbar-start
        navbarLink(to='/admin/feed' :active='$route.path' text='Feed Settings')
        navbarLink(to='/admin/researchers' :active='$route.path' text='Researchers')
        navbarLink(to='/admin/results' :active='$route.path' text='Results')
      .navbar-end
        a.navbar-item(@click='logOut()') Log Out
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/authentication/types';
import navbarLink from '@/components/admin/navbarLink';

const { mapActions } = createNamespacedHelpers('authentication');

export default {
  name: 'navbar',
  methods: {
    ...mapActions([types.action.LOG_OUT]),
  },
  components: { navbarLink },
};
</script>
