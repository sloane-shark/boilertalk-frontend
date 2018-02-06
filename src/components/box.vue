<template lang="pug">
.box
  h1.title {{ title }}
  .is-divider
  slot
</template>

<script>
export default {
  name: 'Login',
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="sass" scoped>
.box
  max-width: 75%
  margin-left: 12.5%
</style>
