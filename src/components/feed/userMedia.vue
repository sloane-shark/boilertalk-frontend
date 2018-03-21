<template lang="pug">
.user.media
  .media-left
    avatar(:username='name')
  .media-content
    h1.title.is-6(v-if='small') {{ name }}
    h1.title.is-4(v-else) {{ name }}
    h2.subtitle.is-6 posted {{ date | moment("subtract", `${Math.random()} hours`, "from") }}
    .content
      slot
</template>

<script>
import avatar from 'vue-avatar';

export default {
  name: 'userMedia',
  components: { avatar },
  props: ['name', 'date', 'small'],
};
</script>
