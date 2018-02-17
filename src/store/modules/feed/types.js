const types = {
  action: {
    OPEN_FEED: 'openFeed',
    SUBMIT_RESULTS: 'submitResults',
    FETCH_LATEST_FEED: 'fetchLatestFeed',
  },
  mutation: {
    SET_EXPERIMENTER_CODE: 'setExperimenterCode',
    SET_PARTICIPANT: 'setParticipant',
    CLEAR_PARTICIPANT: 'clearParticipant',
    SET_FEED: 'setFeed',
    LIKE_POST: 'likePost',
    UNLIKE_POST: 'unlikePost',
    DISLIKE_POST: 'dislikePost',
    UNDISLIKE_POST: 'undislikePost',
    COMMENT_POST: 'commentPost',
    REMOVE_COMMENT_FROM_POST: 'removeCommentFromPost',
    MAKE_POST: 'makePost',
    DELETE_POST: 'deletePost',
    SET_ERROR: 'setError',
    CLEAR_ERROR: 'clearError',
  },
};

export default types;
