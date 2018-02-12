<template lang="pug">
#open-feed-form
  h1.title Open a feed
  h2.subtitle for a participant
  .notification.is-danger(v-if='error')
    p.content {{ errorMessage }}
  textField(
    v-model='credentials.experimenterCode'
    label='Experimenter Code'
    placeholder='007'
    @keyup.enter.native='openFeed(credentials)'
  )
  textField(
    v-model='credentials.pass'
    label='Passcode'
    placeholder='secret'
    type='password'
    @keyup.enter.native='openFeed(credentials)'
  )
  button.button.is-primary(@click='openFeed(credentials)') Submit
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/feed/types';
import textField from '@/components/textField';

const { mapState, mapActions } = createNamespacedHelpers('feed');

export default {
  name: 'openFeedForm',
  data() {
    return {
      credentials: {
        experimenterCode: '',
        pass: '',
      },
    };
  },
  components: { textField },
  methods: {
    ...mapActions([types.action.OPEN_FEED]),
  },
  computed: {
    ...mapState({
      error: state => state.error,
      errorMessage: state => state.errorMessage,
    }),
  },
};
</script>
