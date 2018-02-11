const mutations = {
  setResearchers(state, researchers) {
    state.researchers = researchers;
  },
  resetFeed(state, feed) {
    state.feedModified = false;
    state.feed = feed;
  },
  setFeed(state, feed) {
    state.feedModified = true;
    state.feed = feed;
  },
  addToFeed(state, post) {
    state.feedModified = true;
    state.feed.push({
      ...post,
      likes: 0,
      dislikes: 0,
      comments: [],
    });
  },
  likePost(state, { index, inc = true }) {
    if (state.feed.length > index) {
      state.feedModified = true;
      state.feed[index].likes += (inc ? 1 : -1);
      if (state.feed[index].likes < 0) state.feed[index].likes = 0;
    }
  },
  dislikePost(state, { index, inc = true }) {
    if (state.feed.length > index) {
      state.feedModified = true;
      state.feed[index].dislikes += (inc ? 1 : -1);
      if (state.feed[index].dislikes < 0) state.feed[index].dislikes = 0;
    }
  },
  commentPost(state, { index, comment }) {
    if (state.feed.length > index) {
      state.feedModified = true;
      state.feed[index].comments.push(comment);
    }
  },
  removeCommentFromPost(state, { index, subindex }) {
    if (state.feed.length > index) {
      state.feedModified = true;
      state.feed[index].comments.splice(subindex, 1);
    }
  },
  setCommentsForPost(state, { index, comments }) {
    if (state.feed.length > index) {
      state.feedModified = true;
      state.feed[index].comments = comments;
    }
  },
  removeFromFeed(state, index) {
    state.feedModified = true;
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
