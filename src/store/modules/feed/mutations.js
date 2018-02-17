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
  likePost(state, index) {
    state.feed.posts[index].liked = true;
    state.feed.posts[index].likes += 1;
  },
  unlikePost(state, index) {
    state.feed.posts[index].liked = false;
    state.feed.posts[index].likes -= 1;
  },
  dislikePost(state, index) {
    state.feed.posts[index].disliked = true;
    state.feed.posts[index].dislikes += 1;
  },
  undislikePost(state, index) {
    state.feed.posts[index].disliked = false;
    state.feed.posts[index].dislikes -= 1;
  },
  commentPost(state, { index, body }) {
    state.feed.posts[index].comments.push({ author: state.participant, body, user: true });
  },
  removeCommentFromPost(state, { index, subindex }) {
    state.feed.posts[index].comments.splice(subindex, 1);
  },
  makePost(state, body) {
    state.feed.posts.unshift({
      postType: 'user',
      content: body,
      author: state.participant,
      user: true,
      comments: [],
      likes: 0,
      dislikes: 0,
      liked: false,
      disliked: false,
    });
  },
  deletePost(state, index) {
    state.feed.posts.splice(index, 1);
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
