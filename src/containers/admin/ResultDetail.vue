<template lang="pug">
#result-detail
  box(:title='`Details for ${participant.experimenterCode}`')
    template(v-for='(post, index) in participant.feed.posts')
      post(:post='post' :date='new Date()' :index='index' :parentIndex='$route.params.index')
</template>

<script>
import box from '@/components/box';
import post from '@/components/results/post';

export default {
  name: 'ResultDetail',
  components: { box, post },
  computed: {
    participant() {
      return this.$store.state.results.participants[this.$route.params.index];
    },
  },
};
</script>
