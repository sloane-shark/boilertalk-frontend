const mutations = {
  setExperimenterCode(state, code) {
    state.experimenterCode = code;
  },
  setParticipant(state, name) {
    state.participant = name;
  },
  clearFeed(state) {
    state.experimenterCode = null;
    state.participant = '';
  },
  setErrorFeed(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
  clearErrorFeed(state) {
    state.error = false;
    state.errorMessage = '';
  },
};

export default mutations;
