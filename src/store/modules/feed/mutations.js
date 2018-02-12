const mutations = {
  setExperimenterCode(state, code) {
    state.experimenterCode = code;
  },
  setParticipant(state, name) {
    state.participant = name;
  },
  clearParticipant(state) {
    state.experimenterCode = null;
    state.participant = '';
  },
  setFeed(state, feed) {
    state.feed = feed;
  },
  setError(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
  clearError(state) {
    state.error = false;
    state.errorMessage = '';
  },
};

export default mutations;
