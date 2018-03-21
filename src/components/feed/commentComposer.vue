<template lang="pug">
.comment-composer
  .box
    textArea(
      v-model='body'
      label='Comment'
      placeholder='Comment here!'
    )
    button.button.is-primary(@click='commentPostAndHide({ index, body })') Submit
    button.button.is-danger(@click='$emit("hideComposer")') Cancel
</template>

<script>
import types from '@/store/modules/feed/types';
import textArea from '@/components/textArea';

export default {
  name: 'commentComposer',
  props: ['index'],
  components: { textArea },
  data() {
    return { body: '' };
  },
  methods: {
    commentPostAndHide(payload) {
      this.$store.commit(`feed/${types.mutation.COMMENT_POST}`, payload);
      this.body = '';
      this.$emit('hideComposer');
    },
  },
};
</script>

<style lang="sass" scoped>
.comment-composer
  padding-left: 12rem
</style>
