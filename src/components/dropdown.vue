<template lang="pug">
field(:label='label')
  .select
    select(@input='updateValue($event.target.value)')
      option(disabled value='') Please select one
      option(
        v-for='option in options'
        :value='option'
      ) {{ option }}
</template>

<script>
import field from '@/components/field';

export default {
  name: 'dropdown',
  props: ['options', 'label', 'value'],
  components: { field },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
