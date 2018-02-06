<template lang="pug">
.new-post
  textField(v-model='content' label='Text Content' placeholder='Hello World!')
  textField(v-model='image' label='Image URL' placeholder='http://example.com/image.png')
  textField(v-model='link' label='Link URL' placeholder='http://google.com/')
  button.button.is-primary Add Post
</template>

<script>
import textField from '@/components/textField';

export default {
  name: 'addResearcherForm',
  components: { textField },
  data() {
    return {
      content: '',
      image: '',
      link: '',
    };
  },
};
</script>
