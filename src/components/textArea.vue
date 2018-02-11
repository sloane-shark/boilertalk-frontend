<template lang="pug">
field(:label='label')
  textarea.textarea(
    :placeholder='placeholder'
    :value='value'
    @input='updateValue($event.target.value)'
    rows='1'
  )
</template>

<script>
import field from '@/components/field';

export default {
  name: 'textField',
  components: { field },
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String },
    label: { type: String },
    value: { type: String },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
