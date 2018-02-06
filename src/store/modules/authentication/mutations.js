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
  setErrorAuthentication(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
  clearErrorAuthentication(state) {
    state.error = false;
    state.errorMessage = '';
  },
};

export default mutations;
