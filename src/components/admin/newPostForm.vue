<template lang="pug">
.new-post
  .field.is-grouped
    textField(v-model='post.content' label='Text Content' placeholder='Hello World!')
    textField(v-model='post.image' label='Image URL' placeholder='http://abc.com/image.png')
    textField(v-model='post.link' label='Link URL' placeholder='http://google.com/')
  .field.is-grouped
    textField(v-model='post.author' label='Author Name' placeholder='Boilertalk')
    dropdown(v-model='post.postType' label='Post Type' :options='["text", "event", "link"]')
  button.button.is-primary(@click='addPost(post)') Add Post
</template>

<script>
import textField from '@/components/textField';
import dropdown from '@/components/dropdown';
import types from '@/store/modules/admin/types';

export default {
  name: 'newPostForm',
  components: { textField, dropdown },
  data() {
    return {
      post: {
        content: '',
        image: '',
        link: '',
        author: '',
        postType: 'text',
      },
    };
  },
  methods: {
    addPost({ content, image, link, author, postType }) {
      if (content === '' || author === '') {
        this.$store.commit(`admin/${types.mutation.SET_ERROR}`, 'Include post content and author.');
        return;
      }
      const post = {
        content,
        author,
        postType,
        // add image + link if not empty
        ...(image !== '' && { image }),
        ...(link !== '' && { link }),
      };
      this.$store.commit(`admin/${types.mutation.ADD_TO_FEED}`, post);
      this.$store.commit(`admin/${types.mutation.CLEAR_ERROR}`);
      this.content = '';
      this.image = '';
      this.link = '';
    },
  },
};
</script>

<style lang="sass" scoped>
.field > *
  margin-right: 1rem
</style>
