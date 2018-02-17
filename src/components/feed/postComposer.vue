<template lang="pug">
.composer
  h1.title.is-4 Write a new post...
  textarea.textarea(placeholder='What\'s going on?' v-model='body')
  .level
    button.button.level-item.is-primary(@click='makePost(body)') Submit
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/feed/types';

const { mapMutations } = createNamespacedHelpers('feed');

export default {
  name: 'postComposer',
  data() {
    return { body: '' };
  },
  methods: {
    ...mapMutations([types.mutation.MAKE_POST]),
  },
};
</script>

<style lang="sass" scoped>
button
  border-radius: 0 0 5px 5px
  margin-bottom: 2rem
</style>
