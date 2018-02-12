const types = {
  mutation: {
    SET_RESEARCHERS: 'setResearchers',
    RESET_FEED: 'resetFeed',
    SET_FEED: 'setFeed',
    ADD_TO_FEED: 'addToFeed',
    LIKE_POST: 'likePost',
    DISLIKE_POST: 'dislikePost',
    COMMENT_POST: 'commentPost',
    REMOVE_COMMENT_FROM_POST: 'removeCommentFromPost',
    SET_COMMENTS_FOR_POST: 'setCommentsForPost',
    REMOVE_FROM_FEED: 'removeFromFeed',
    SET_ERROR: 'setError',
    CLEAR_ERROR: 'clearError',
  },
  action: {
    FETCH_RESEARCHERS: 'fetchResearchers',
    DELETE_RESEARCHER: 'deleteResearcher',
    ADD_RESEARCHER: 'addResearcher',
    CHANGE_PASSWORD: 'changePassword',
    SUBMIT_FEED: 'submitFeed',
    FETCH_FEED: 'fetchFeed',
  },
};

export default types;
