<template lang="pug">
.composer
  h1.title.is-4 Write a new post...
  textarea.textarea(placeholder='What\'s going on?')
  .level
    button.button.level-item.is-primary Submit
</template>

<script>
export default {
  name: 'postComposer',
};
</script>

<style lang="sass" scoped>
button
  border-radius: 0 0 5px 5px
  margin-bottom: 2rem
</style>
