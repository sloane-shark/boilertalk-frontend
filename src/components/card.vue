<template lang="pug">
.card
  .card-image(v-if='image')
    figure.image
      img(:src='image')
  .card-content
    slot
  .card-footer
    slot(name='footer-items')
      a.card-footer-item Done
</template>

<script>
export default {
  name: 'card',
  props: ['image'],
};
</script>

<style lang="sass" scoped>
.card
  border-radius: 5px
  margin-bottom: 0.5rem
</style>
