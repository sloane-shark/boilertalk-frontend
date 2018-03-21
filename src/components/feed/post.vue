<template lang="pug">
.post
  card(:image='post.image')
    userMedia(:name='post.author', :date='date')
      template(v-if='post.postType === "text" || post.postType === "user"')
        p {{ post.content }}
        p.
          Likes {{ post.likes }}
          | Dislikes {{ post.dislikes }}
          | Comments {{ post.comments.length }}
      template(v-else-if='post.postType === "link"')
        a(:href='post.link' target='_blank') {{ post.content }}
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
      template(
        v-if='post.postType === "text" || post.postType === "link" || post.postType === "user"'
      )
        a.card-footer-item(@click='composeComment(index)')
          i.far.fa-comment
          span &nbsp;Comment
        a.card-footer-item(@click='toggleLikePost(index)')
          i.far.fa-thumbs-up
          span &nbsp;{{ post.liked ? 'Unlike' : 'Like' }}
        a.card-footer-item(@click='toggleDislikePost(index)')
          i.far.fa-thumbs-down
          span &nbsp;{{ post.disliked ? 'Undislike' : 'Dislike' }}
      template(v-else-if='post.postType === "event"')
        a.card-footer-item(@click='toggleLikePost(index)') Going
        a.card-footer-item(@click='toggleDislikePost(index)') Interested
        //- a.card-footer-item Not Going
  comments(:index='index' v-if='post.comments.length > 0 && post.postType != "event"')
  commentComposer(
    v-show='composing && composingIndex === index'
    @hideComposer='composing = false'
    :index='index'
  )
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';
import comments from '@/components/feed/comments';
import commentComposer from '@/components/feed/commentComposer';
import types from '@/store/modules/feed/types';

const { mapMutations } = createNamespacedHelpers('feed');

export default {
  name: 'post',
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
