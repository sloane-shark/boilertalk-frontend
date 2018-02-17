<template lang="pug">
.post(v-if='post.postType !== "hide"')
  card(:image='post.image')
    userMedia(:name='post.author', :date='date')
      template(v-if='post.postType === "text" || post.postType === "user"')
        p {{ post.content }}
        p(v-if='post.liked') Liked
        p(v-else-if='post.disliked') Disliked
      template(v-else-if='post.postType === "link"')
        a(:href='post.link') {{ post.content }}
        p(v-if='post.liked') Liked
        p(v-else-if='post.disliked') Disliked
      template(v-else-if='post.postType === "event"')
        p {{ post.content }}
        p(v-if='post.liked') Going
        p(v-else-if='post.disliked') Interested
  comments(
    :parentIndex='parentIndex'
    :index='index' v-if='post.comments.length > 0 && post.postType != "event"'
  )
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';
import comments from '@/components/results/comments';
import types from '@/store/modules/feed/types';

const { mapMutations } = createNamespacedHelpers('feed');

export default {
  name: 'post',
  props: ['post', 'date', 'index', 'parentIndex'],
  components: { card, userMedia, comments },
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
      types.mutation.LIKE_POST,
      types.mutation.UNLIKE_POST,
      types.mutation.DISLIKE_POST,
      types.mutation.UNDISLIKE_POST,
    ]),
    toggleLikePost(index) {
      if (this.post.liked) {
        this.unlikePost(index);
      } else if (this.post.disliked) {
        this.undislikePost(index);
        this.likePost(index);
      } else {
        this.likePost(index);
      }
    },
    toggleDislikePost(index) {
      if (this.post.disliked) {
        this.undislikePost(index);
      } else if (this.post.liked) {
        this.unlikePost(index);
        this.dislikePost(index);
      } else {
        this.dislikePost(index);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.post
  margin-bottom: 2rem
</style>
