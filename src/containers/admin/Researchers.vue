<template lang="pug">
#researchers
  box(title="Researchers")
    .notification.is-danger(v-if='error')
      p.content {{ errorMessage }}
    button.button.is-primary.is-pulled-right(@click='researcherModalActive = true') Add Researcher
    table.table.is-striped.is-fullwidth
      thead
        tr
          th Name
          td Email
          td
      tbody
        tr(
          v-for='researcher in researchers'
          v-if='researcher.name !== "mat" || user.name === "mat"'
        )
          th {{ researcher.name }}
          td
            a(:href='"mailto:" + researcher.email') {{ researcher.email }}
          td
            a(
              v-if='user.admin && !researcher.admin'
              @click='deleteResearcher(researcher._id)'
            ) Delete
            a(
              v-if='user._id === researcher._id'
              @click='passwordModalActive = true'
            ) Change Password
  addResearcherModal(
    :class='{ "is-active": researcherModalActive }'
    @closeModal='researcherModalActive = false'
  )
  changePasswordModal(
    :class='{ "is-active": passwordModalActive }'
    @closeModal='passwordModalActive = false'
  )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/admin/types';
import box from '@/components/box';
import addResearcherModal from '@/components/admin/addResearcherModal';
import changePasswordModal from '@/components/admin/changePasswordModal';

export default {
  name: 'Researchers',
  components: { box, addResearcherModal, changePasswordModal },
  data() {
    return {
      researcherModalActive: false,
      passwordModalActive: false,
    };
  },
  methods: {
    ...mapActions([
      types.action.DELETE_RESEARCHER,
      types.action.FETCH_RESEARCHERS,
      types.action.CHANGE_PASSWORD,
    ]),
  },
  computed: {
    ...mapState({
      researchers: state => state.admin.researchers,
      user: state => state.authentication.researcher,
      error: state => state.admin.error,
      errorMessage: state => state.admin.errorMessage,
    }),
  },
  mounted() {
    this.$store.dispatch(types.action.FETCH_RESEARCHERS);
  },
};
</script>
