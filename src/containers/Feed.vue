<template lang="pug">
#feed
  box(title='Welcome to your feed!')
    setNameForm(v-if='participant === ""')
    template(v-else)
      postComposer
      template(v-for='(post, index) in feed.posts')
        post(:post='post' :date='new Date()' :index='index')
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import box from '@/components/box';
import post from '@/components/feed/post';
import setNameForm from '@/components/feed/setNameForm';
import postComposer from '@/components/feed/postComposer';
import types from '@/store/modules/feed/types';

const { mapState } = createNamespacedHelpers('feed');

export default {
  name: 'Feed',
  components: { box, setNameForm, post, postComposer },
  computed: {
    ...mapState({
      feed: state => state.feed,
      participant: state => state.participant,
      experimenterCode: state => state.experimenterCode,
    }),
  },
  mounted() {
    if (this.experimenterCode === null) {
      this.$router.push('login');
    }
    this.$store.dispatch(`feed/${types.action.FETCH_LATEST_FEED}`);
  },
};
</script>
