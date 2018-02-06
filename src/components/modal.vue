<template lang="pug">
.modal
  .modal-background
  .modal-card
    header.modal-card-head
      p.modal-card-title {{ title }}
      button.delete(aria-label='close' @click='$emit("closeModal")')
    section.modal-card-body
      slot(@closeModal='$emit("closeModal")')
</template>

<script>
export default {
  name: 'modal',
  props: {
    title: { type: String, required: true },
  },
};
</script>
