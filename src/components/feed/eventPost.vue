<template lang="pug">
.event-post
  card(:image='post.image')
    userMedia(:name='post.author', :date='date')
      p {{ post.content }}
    template(slot='footer-items')
      a.card-footer-item Going
      a.card-footer-item Interested
      a.card-footer-item Not Interested
</template>

<script>
import card from '@/components/card';
import userMedia from '@/components/feed/userMedia';

export default {
  name: 'eventPost',
  props: ['post', 'date'],
  components: { card, userMedia },
};
</script>
