<template lang="pug">
.comments
  .box
    template(v-for='(comment, subindex) in comments')
      .delete.is-small.is-pulled-right(
        @click='removeCommentFromPost({ index, subindex })'
        v-if='comment.author === participant'
      )
      p.has-text-weight-semibold {{ comment.author }}
      p.content {{ comment.body }}
      hr(v-if='subindex != comments.length - 1')
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/feed/types';

const { mapMutations, mapState } = createNamespacedHelpers('feed');

export default {
  name: 'comments',
  props: ['index'],
  computed: {
    comments: {
      get() { return this.$store.state.feed.feed.posts[this.index].comments; },
    },
    ...mapState({ participant: state => state.participant }),
  },
  methods: {
    ...mapMutations([types.mutation.REMOVE_COMMENT_FROM_POST]),
  },
};
</script>

<style lang="sass" scoped>
.comments
  width: 25%
</style>
