<template lang="pug">
.change-password
  textField(v-model='password' type='password' label='Password' placeholder='boiler up!')
  textField(v-model='confirm' type='password' label='Confirm password' placeholder='boiler up!')
  button.button.is-primary(@click='changePassword(password, confirm)') Change Password
</template>

<script>
import textField from '@/components/textField';
import types from '@/store/modules/admin/types';

export default {
  name: 'changePasswordForm',
  components: { textField },
  data() {
    return {
      password: '',
      confirm: '',
    };
  },
  methods: {
    changePassword(password, confirm) {
      if (password === confirm) {
        this.$store.dispatch(types.action.CHANGE_PASSWORD, password);
      } else {
        this.$store.commit(types.mutation.SET_ERROR, 'Passwords must match.');
      }
      this.password = '';
      this.confirm = '';
      this.$emit('closeModal');
    },
  },
};
</script>
