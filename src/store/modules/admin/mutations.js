const mutations = {
  setResearchers(state, researchers) {
    state.researchers = researchers;
  },
  setFeed(state, feed) {
    state.feed = feed;
  },
  addToFeed(state, post) {
    state.feed.push(post);
  },
  removeFromFeed(state, index) {
    state.feed.splice(index, 1);
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
