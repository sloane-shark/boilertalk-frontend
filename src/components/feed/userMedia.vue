<template lang="pug">
.user.media
  .media-left
    avatar(:username='name')
  .media-content
    h1.title.is-4 {{ name }}
    h2.subtitle.is-6 posted {{ date | moment("from") }}
    .content
      slot
</template>

<script>
import avatar from 'vue-avatar';

export default {
  name: 'userMedia',
  components: { avatar },
  props: ['name', 'date'],
};
</script>
