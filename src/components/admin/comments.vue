<template lang="pug">
.comments
  article.media
    .media-content
      draggable(
        v-model='comments'
        @end='$store.dispatch("admin/submitFeed", $store.state.admin.feed)'
      )
        template(v-for='(comment, subindex) in comments')
          .contain
            .delete.is-pulled-right.is-small(@click='removeCommentFromPost({ index, subindex })')
            userMedia(:name='comment.author' :date='new Date()' small)
              p.content {{ comment.body }}
            hr
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import draggable from 'vuedraggable';
import types from '@/store/modules/admin/types';
import userMedia from '@/components/feed/userMedia';

const { mapMutations } = createNamespacedHelpers('admin');

export default {
  name: 'comments',
  components: { draggable, userMedia },
  props: ['index'],
  computed: {
    comments: {
      get() {
        return this.$store.state.admin.feed[this.index].comments;
      },
      set(value) {
        this.$store.commit(
          `admin/${types.mutation.SET_COMMENTS_FOR_POST}`,
          { index: this.index, comments: value },
        );
      },
    },
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
