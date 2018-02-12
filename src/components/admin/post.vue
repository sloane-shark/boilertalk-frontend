<template lang="pug">
.post
  card(:image='post.image')
    a.delete.is-large.is-pulled-right(@click='removeFromFeed(index)')
    userMedia(:name='post.author', :date='date')
      template(v-if='post.postType === "text"')
        p {{ post.content }}
        p.
          Likes {{ post.likes }}
          | Dislikes {{ post.dislikes }}
          | Comments {{ post.comments.length }}
      template(v-else-if='post.postType === "link"')
        a(:href='post.link') {{ post.content }}
        p.
          Likes {{ post.likes }}
          | Dislikes {{ post.dislikes }}
          | Comments {{ post.comments.length }}
      template(v-else-if='post.postType === "event"')
        p {{ post.content }}
        p.
          Going {{ post.likes }}
          | Interested {{ post.dislikes }}
          | Not Going {{ post.comments.length }}
    template(slot='footer-items')
      template(v-if='post.postType === "text" || post.postType === "link"')
        a.card-footer-item(
          @click='composeComment(index)'
        ) + Comment
        a.card-footer-item(@click='likePost({ index })') + Like
        a.card-footer-item(@click='likePost({ index, inc: false })') - Like
        a.card-footer-item(@click='dislikePost({ index })') + Dislike
        a.card-footer-item(@click='dislikePost({ index, inc: false })') - Dislike
      template(v-else-if='post.postType === "event"')
        a.card-footer-item(@click='likePost({ index })') + Going
        a.card-footer-item(@click='likePost({ index, inc: false })') - Going
        a.card-footer-item(@click='dislikePost({ index })') + Interested
        a.card-footer-item(@click='dislikePost({ index, inc: false })') - Interested
        a.card-footer-item(@click='commentPost({ index, comment: new Object()})') + Not Going
        a.card-footer-item(@click='removeCommentFromPost({ index, subindex: 0 })') - Not Going
  comments(:index='index' v-if='post.comments.length > 0')
  commentComposer(
    v-show='composing && composingIndex === index'
    @hideComposer='composing = false'
    :index='index'
  )
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/admin/types';
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';
import comments from '@/components/admin/comments';
import commentComposer from '@/components/admin/commentComposer';

const { mapMutations } = createNamespacedHelpers('admin');

export default {
  name: 'postAdmin',
  props: ['post', 'date', 'index'],
  components: { card, userMedia, comments, commentComposer },
  data() {
    return {
      composing: false,
      composingIndex: null,
    };
  },
  methods: {
    composeComment(index) {
      this.composing = true;
      this.composingIndex = index;
    },
    ...mapMutations([
      types.mutation.REMOVE_FROM_FEED,
      types.mutation.LIKE_POST,
      types.mutation.DISLIKE_POST,
      types.mutation.COMMENT_POST,
      types.mutation.REMOVE_COMMENT_FROM_POST,
    ]),
  },
};
</script>

<style lang="sass" scoped>
.post
  margin-bottom: 2rem
</style>
