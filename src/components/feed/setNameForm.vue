<template lang="pug">
#open-feed-form
  h1.title Please enter your name
  .notification.is-danger(v-if='error')
    p.content {{ errorMessage }}
  textField(
    v-model='name'
    label='First Name'
    placeholder='Pete'
    @keyup.enter.native='setParticipant(name)'
  )
  button.button.is-primary(@click='setParticipant(name)') Submit
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/feed/types';
import textField from '@/components/textField';

const { mapState, mapMutations } = createNamespacedHelpers('feed');

export default {
  name: 'openFeedForm',
  data() {
    return {
      name: '',
    };
  },
  components: { textField },
  methods: {
    ...mapMutations([types.mutation.SET_PARTICIPANT]),
  },
  computed: {
    ...mapState({
      error: state => state.error,
      errorMessage: state => state.errorMessage,
    }),
  },
};
</script>
