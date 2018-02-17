<template lang="pug">
#results
  box(title='Results')
    .notification.is-danger(v-if='error')
      p.content {{ errorMessage }}
    table.table.is-striped.is-fullwidth
      thead
        tr
          th Experimenter Code
          td
          td
      tbody
        tr(v-for='(participant, index) in participants')
          th {{ participant.experimenterCode }}
          td
            router-link(:to='`results/${index}`') Results
          td
            a(@click='archiveResults(participant._id)') Archive
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import box from '@/components/box';
import types from '@/store/modules/results/types';

const { mapActions, mapState } = createNamespacedHelpers('results');

export default {
  name: 'Results',
  components: { box },
  computed: {
    ...mapState(['participants', 'error', 'errorMessage']),
  },
  methods: {
    ...mapActions([types.action.FETCH_RESULTS]),
  },
  mounted() {
    this.fetchResults();
  },
};
</script>
