<template lang="pug">
.comments
  .box
    template(v-for='(comment, subindex) in comments')
      p.has-text-weight-semibold {{ comment.author }}
      p.content {{ comment.body }}
      hr(v-if='subindex != comments.length - 1')
</template>

<script>
export default {
  name: 'comments',
  props: ['index', 'parentIndex'],
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
  width: 25%
</style>
