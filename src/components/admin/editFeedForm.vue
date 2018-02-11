<template lang="pug">
.edit-feed
  draggable(v-model='feed')
    template(v-for='(post, index) in feed')
      post(:post='post' :date='new Date()' :index='index')
  button.button.is-primary(@click='submitFeed(feed)') Submit Feed
  button.button.is-danger(@click='resetFeed([])') Clear
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import draggable from 'vuedraggable';
import types from '@/store/modules/admin/types';
import post from '@/components/admin/post';

export default {
  name: 'editFeedForm',
  components: { draggable, post },
  computed: {
    feed: {
      get() {
        return this.$store.state.admin.feed;
      },
      set(value) {
        this.$store.commit(types.mutation.SET_FEED, value);
      },
    },
  },
  methods: {
    ...mapActions([types.action.SUBMIT_FEED]),
    ...mapMutations([types.mutation.RESET_FEED]),
  },
  mounted() {
    this.$store.dispatch(types.action.FETCH_FEED);
  },
};
</script>

<style lang="sass" scoped>
button
  margin-right: 1rem
</style>
