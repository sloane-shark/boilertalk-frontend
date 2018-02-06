<template lang="pug">
.post
  eventPost(v-if='post.type === "event"' :post='post' :date='date')
  linkPost(v-else-if='post.type === "link"' :post='post' :date='date')
  textPost(v-else-if='post.type === "text"' :post='post' :date='date')
</template>

<script>
import eventPost from '@/components/feed/eventPost';
import linkPost from '@/components/feed/linkPost';
import textPost from '@/components/feed/textPost';

export default {
  name: 'post',
  props: ['post', 'date'],
  components: { eventPost, linkPost, textPost },
};
</script>

<style lang="sass" scoped>
.post
  margin-bottom: 2rem
</style>
