<template lang="pug">
#admin-login-form
  h1.title Login
  h2.subtitle as a researcher
  .notification.is-danger(v-if='error')
    p.content {{ errorMessage }}
  textField(
    v-model='credentials.email'
    label='Email'
    placeholder='pete@purdue.edu'
    @keyup.enter.native='logIn(credentials)'
  )
  textField(
    v-model='credentials.password'
    label='Password'
    placeholder='boiler up'
    type='password'
    @keyup.enter.native='logIn(credentials)'
  )
  button.button.is-primary(@click='logIn(credentials)') Submit
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/authentication/types';
import textField from '@/components/textField';

const { mapState, mapActions } = createNamespacedHelpers('authentication');

export default {
  name: 'adminLoginForm',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  components: { textField },
  methods: {
    ...mapActions([types.action.LOG_IN]),
  },
  computed: {
    ...mapState({
      error: state => state.error,
      errorMessage: state => state.errorMessage,
    }),
  },
};
</script>
