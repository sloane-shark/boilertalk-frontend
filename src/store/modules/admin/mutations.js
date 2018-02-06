const mutations = {
  setResearchers(state, researchers) {
    state.researchers = researchers;
  },
  setErrorAdmin(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
  clearErrorAdmin(state) {
    state.error = false;
    state.errorMessage = '';
  },
};

export default mutations;
