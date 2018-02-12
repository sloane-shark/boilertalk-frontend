const mutations = {
  setResearcher(state, researcher) {
    state.researcher = researcher;
  },
  setLoggedIn(state) {
    state.loggedIn = true;
  },
  setLoggedOut(state) {
    state.researcher = null;
    state.loggedIn = false;
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
