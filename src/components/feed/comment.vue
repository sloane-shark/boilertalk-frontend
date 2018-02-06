<template lang="pug">
.card
  .media
    .media-left
      avatar(:username='comment.author')
    .media-content
      p.title.is-6 {{ comment.author }}
      p.subtitle.is-6 {{ comment.body }}
</template>

<script>
import avatar from 'vue-avatar';

export default {
  name: 'comment',
  props: ['comment', 'key', 'index'],
  components: { avatar },
};
</script>

<style lang="sass" scoped>
.card
  margin-left: 5rem
  margin-right: 35rem
  padding: 1rem
</style>
