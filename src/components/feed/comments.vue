<template lang="pug">
.comments
  article.media
    .media-content
      template(v-for='(comment, subindex) in comments')
        .contain
          .delete.is-small.is-pulled-right(
            @click='removeCommentFromPost({ index, subindex })'
            v-if='comment.author === participant'
          )
          userMedia(:name='comment.author' :date='new Date()' small)
            p.content {{ comment.body }}
          hr
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/feed/types';
import userMedia from '@/components/feed/userMedia';

const { mapMutations, mapState } = createNamespacedHelpers('feed');

export default {
  name: 'comments',
  props: ['index'],
  components: { userMedia },
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
  padding-left: 12rem
.contain
  border-bottom: 0.1rem solid lightgray
  padding-bottom: 1rem
  margin-bottom: 1rem
.contain:last-of-type
  border-bottom: none
  margin-bottom: 0
</style>
