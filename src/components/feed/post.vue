<template lang="pug">
.post
  card(:image='post.image')
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
        a.card-footer-item Comment
        a.card-footer-item Like
        a.card-footer-item Dislike
      template(v-else-if='post.postType === "event"')
        a.card-footer-item Going
        a.card-footer-item Interested
        a.card-footer-item Not Going
  comments(:index='index' v-if='post.comments.length > 0')
  commentComposer(
    v-show='composing && composingIndex === index'
    @hideComposer='composing = false'
    :index='index'
  )
</template>

<script>
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';
// import comments from '@/components/feed/comments';
// import commentComposer from '@/components/feed/commentComposer';

export default {
  name: 'post',
  props: ['post', 'date', 'index'],
  components: { card, userMedia /* , comments, commentComposer */ },
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
  },
};
</script>

<style lang="sass" scoped>
.post
  margin-bottom: 2rem
</style>
