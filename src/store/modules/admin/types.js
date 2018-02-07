const types = {
  mutation: {
    SET_RESEARCHERS: 'setResearchers',
    SET_FEED: 'setFeed',
    ADD_TO_FEED: 'addToFeed',
    REMOVE_FROM_FEED: 'removeFromFeed',
    SET_ERROR: 'setErrorAdmin',
    CLEAR_ERROR: 'clearErrorAdmin',
  },
  action: {
    FETCH_RESEARCHERS: 'fetchResearchers',
    DELETE_RESEARCHER: 'deleteResearcher',
    ADD_RESEARCHER: 'addResearcher',
    CHANGE_PASSWORD: 'changePassword',
  },
};

export default types;
