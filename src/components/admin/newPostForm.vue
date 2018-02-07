<template lang="pug">
.new-post
  textField(v-model='content' label='Text Content' placeholder='Hello World!')
  textField(v-model='image' label='Image URL' placeholder='http://example.com/image.png')
  textField(v-model='link' label='Link URL' placeholder='http://google.com/')
  button.button.is-primary(@click='addPost({ content, image, link })') Add Post
</template>

<script>
import textField from '@/components/textField';
import types from '@/store/modules/admin/types';

export default {
  name: 'newPostForm',
  components: { textField },
  data() {
    return {
      content: '',
      image: '',
      link: '',
    };
  },
  methods: {
    addPost({ content, image, link }) {
      const post = {
        content,
        // add image + link if not empty
        ...(image !== '' && { image }),
        ...(link !== '' && { link }),
      };
      this.$store.commit(types.mutation.ADD_TO_FEED, post);
      this.content = '';
      this.image = '';
      this.link = '';
    },
  },
};
</script>
