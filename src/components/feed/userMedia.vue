<template lang="pug">
.user.media
  .media-left
    avatar(:username='name' v-if='name')
  .media-content
    h1.title.is-6(v-if='small') {{ name }}
    h1.title.is-4(v-else) {{ name }}
    h2.subtitle.is-6(
      v-if='name !== this.$store.state.feed.participant'
    ) posted {{ date | moment("subtract", `${Math.random()} hours`, "from") }}
    h2.subtitle.is-6(v-else) posted Just Now
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
