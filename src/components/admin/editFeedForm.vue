<template lang="pug">
.edit-feed
  draggable
  button.button.is-primary Add Post
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'editFeedForm',
  components: { draggable },
};
</script>
