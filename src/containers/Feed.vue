<template lang="pug">
#feed
  box(title='Welcome to your feed!')
    setNameForm(v-if='participant === ""')
    template(v-else)
      postComposer
      post(v-for='(post, index) in posts' :post='post' :key='post.id' :index='index')
</template>

<script>
import { mapState } from 'vuex';
import box from '@/components/box';
import post from '@/components/feed/post';
import setNameForm from '@/components/feed/setNameForm';
import postComposer from '@/components/feed/postComposer';

export default {
  name: 'Feed',
  components: { box, setNameForm, post, postComposer },
  data() {
    return {
      posts: [{
        id: 0,
        type: 'text',
        content: 'hello, world!',
        author: 'mat',
        likes: 1,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [{ body: 'hi!', author: 'mack' }],
      },
      {
        id: 1,
        type: 'link',
        content: 'http://google.com',
        author: 'mack',
        likes: 0,
        dislikes: 1,
        liked: false,
        disliked: false,
        comments: [{ body: 'nice', author: 'mat' }, { body: 'i love it!', author: 'pablo' }],
      },
      {
        id: 2,
        type: 'event',
        content: 'House Party @ 10:30',
        author: 'pablo',
        likes: 2,
        dislikes: 3,
        liked: false,
        disliked: false,
        comments: [],
      }],
    };
  },
  computed: {
    ...mapState({
      participant: state => state.feed.participant,
      experimenterCode: state => state.feed.experimenterCode,
    }),
  },
  mounted() {
    if (this.experimenterCode === null) {
      this.$router.push('login');
    }
  },
};
</script>
