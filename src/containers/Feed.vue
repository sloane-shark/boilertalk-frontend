<template lang="pug">
#feed
  box(title='Welcome to your feed!')
    setNameForm(v-if='participant === ""')
    template(v-else)
      postComposer
      template(v-for='(post, index) in posts')
        post(:post='post' :date='new Date()')
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
        image: null,
        link: null,
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
        content: 'Google.com | google.com',
        image: 'https://www.google.org/assets/static/images/logo_googledotorg-171e7482e5523603fc0eed236dd772d8.svg',
        link: 'http://google.com',
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
        image: 'https://az616578.vo.msecnd.net/files/2016/08/29/636080871731388695-440853176_Party-people-background.jpg',
        link: null,
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
