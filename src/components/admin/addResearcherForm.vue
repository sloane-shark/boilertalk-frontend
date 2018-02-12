<template lang="pug">
.add-researcher
  textField(v-model='name' label='Name' placeholder='Purdue Pete')
  textField(v-model='email' label='Email' placeholder='pete@purdue.edu')
  button.button.is-primary(@click='addResearcher(name, email)') Send Email
</template>

<script>
import textField from '@/components/textField';
import types from '@/store/modules/admin/types';

export default {
  name: 'addResearcherForm',
  components: { textField },
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    addResearcher(name, email) {
      this.$store.dispatch(`admin/${types.action.ADD_RESEARCHER}`, { name, email });
      this.name = '';
      this.email = '';
      this.$emit('closeModal');
    },
  },
};
</script>
