<template lang="pug">
#feed-settings
  box(title='Feed Settings')
    .notification.is-danger(v-if='error')
      p.content {{ errorMessage }}
    h1.title.is-4 New Post
    newPostForm
    .is-divider
    h1.title.is-4 Edit Feed
    editFeedForm
</template>

<script>
import { mapState } from 'vuex';
import box from '@/components/box';
import newPostForm from '@/components/admin/newPostForm';

export default {
  name: 'FeedSettings',
  components: { box, newPostForm },
  computed: {
    ...mapState({
      error: state => state.admin.error,
      errorMessage: state => state.admin.errorMessage,
    }),
  },
};
</script>
