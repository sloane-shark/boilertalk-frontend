<template lang="pug">
.edit-feed
  draggable(v-model='feed' @end='submitFeed(feed)')
    template(v-for='(post, index) in feed')
      post(:post='post' :date='new Date()' :index='index')
  button.button.is-primary(@click='submitFeed(feed)') Submit Feed
  button.button.is-danger(@click='resetFeed([])') Clear
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import draggable from 'vuedraggable';
import types from '@/store/modules/admin/types';
import post from '@/components/admin/post';

const { mapActions, mapMutations } = createNamespacedHelpers('admin');

export default {
  name: 'editFeedForm',
  components: { draggable, post },
  computed: {
    feed: {
      get() {
        return this.$store.state.admin.feed;
      },
      set(value) {
        this.setFeed(value);
      },
    },
  },
  methods: {
    ...mapActions([types.action.SUBMIT_FEED, types.action.FETCH_FEED]),
    ...mapMutations([types.mutation.RESET_FEED, types.mutation.SET_FEED]),
  },
  mounted() {
    this.fetchFeed();
  },
};
</script>

<style lang="sass" scoped>
button
  margin-right: 1rem
</style>
