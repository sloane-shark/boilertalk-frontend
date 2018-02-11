<template lang="pug">
.comments
  .box
    draggable(v-model='comments')
      template(v-for='(comment, subindex) in comments')
        .delete.is-pulled-right.is-small(@click='removeCommentFromPost({ index, subindex })')
        p.has-text-weight-semibold {{ comment.author }}
        p.content {{ comment.body }}
        hr(v-if='subindex != comments.length - 1')
</template>

<script>
import { mapMutations } from 'vuex';
import draggable from 'vuedraggable';
import types from '@/store/modules/admin/types';

export default {
  name: 'comments',
  components: { draggable },
  props: ['index'],
  computed: {
    comments: {
      get() {
        return this.$store.state.admin.feed[this.index].comments;
      },
      set(value) {
        this.$store.commit(
          types.mutation.SET_COMMENTS_FOR_POST,
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
  width: 25%
</style>
