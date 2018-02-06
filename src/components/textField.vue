<template lang="pug">
field(:label='label')
  input.input(
    :type='type'
    :placeholder='placeholder'
    :value='value'
    @input='updateValue($event.target.value)'
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
