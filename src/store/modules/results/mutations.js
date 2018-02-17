const mutations = {
  setParticipants(state, participants) {
    state.participants = participants;
  },
  clearParticipants(state) {
    state.participants = [];
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
