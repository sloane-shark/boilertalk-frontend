<template lang="pug">
#app
  hero
  navbar(v-if='loggedIn')
  section.section
    .container
      router-view
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/authentication/types';
import hero from '@/components/hero';
import navbar from '@/components/admin/navbar';

const { mapState } = createNamespacedHelpers('authentication');

export default {
  name: 'App',
  components: { hero, navbar },
  computed: {
    ...mapState({ loggedIn: state => state.loggedIn }),
  },
  created() {
    this.$store.dispatch(`authentication/${types.action.AUTH}`);
  },
};
</script>

<style lang="sass">
@import '~bulma/bulma'
@import '~bulma-divider/bulma-divider'
</style>
