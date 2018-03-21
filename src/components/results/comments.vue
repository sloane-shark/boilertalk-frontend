<template lang="pug">
.comments
  .box
    template(v-for='(comment, subindex) in comments')
      .contain
        userMedia(:name='comment.author' :date='new Date()' small)
          p.content {{ comment.body }}
</template>

<script>
import userMedia from '@/components/feed/userMedia';

export default {
  name: 'comments',
  props: ['index', 'parentIndex'],
  components: { userMedia },
  computed: {
    comments: {
      get() {
        return this.$store
          .state.results.participants[this.parentIndex]
          .feed.posts[this.index].comments;
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.comments
  padding-left: 12rem
.contain
  border-bottom: 0.1rem solid lightgray
  padding-bottom: 1rem
  margin-bottom: 1rem
.contain:last-of-type
  border-bottom: none
  margin-bottom: 0
</style>
