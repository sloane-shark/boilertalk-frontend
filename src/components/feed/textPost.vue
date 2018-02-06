<template lang="pug">
.text-post
  card(:image='post.image')
    userMedia(:name='post.author', :date='date')
      p {{ post.content }}
    template(slot='footer-items')
      a.card-footer-item Comment
      a.card-footer-item Like
      a.card-footer-item Dislike
</template>

<script>
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';

export default {
  name: 'textPost',
  props: ['post', 'date'],
  components: { card, userMedia },
};
</script>
