<template lang="pug">
#feed-settings
  box(title='Feed Settings')
    h1.title.is-4 New Post
    newPostForm
    .is-divider
    h1.title.is-4 Edit Feed
    editFeedForm
</template>

<script>
import box from '@/components/box';
import newPostForm from '@/components/admin/newPostForm';

export default {
  name: 'FeedSettings',
  components: { box, newPostForm },
};
</script>
