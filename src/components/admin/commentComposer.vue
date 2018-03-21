<template lang="pug">
.comment-composer
  .box
    textField(
      v-model='draft.author'
      label='Comment Author'
      placeholder='Allport'
    )
    textArea(
      v-model='draft.body'
      label='Comment Body'
      placeholder='Blah blah blah...'
    )
    button.button.is-primary(
      @click='commentPostAndHide({ index, comment: Object.assign({}, draft) })'
    ) Submit
    button.button.is-danger(@click='$emit("hideComposer")') Cancel
</template>

<script>
import types from '@/store/modules/admin/types';
import textArea from '@/components/textArea';
import textField from '@/components/textField';

export default {
  name: 'commentComposer',
  props: ['index'],
  components: { textArea, textField },
  data() {
    return { draft: { author: '', body: '' } };
  },
  methods: {
    commentPostAndHide(payload) {
      this.$store.commit(`admin/${types.mutation.COMMENT_POST}`, payload);
      this.$emit('hideComposer');
    },
  },
};
</script>

<style lang="sass" scoped>
.comment-composer
  padding-left: 12rem
</style>
