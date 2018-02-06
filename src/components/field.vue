<template lang="pug">
.field
  label.label(v-if='label') {{ label }}
  .control
    slot
</template>

<script>
export default {
  name: 'field',
  props: {
    label: { type: String },
  },
};
</script>
