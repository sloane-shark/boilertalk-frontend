import feathers from '@/store/feathers';
import types from './types';

const actions = {
  fetchResearchers({ commit }) {
    feathers.service('researchers').find()
      .then((response) => {
        commit(types.mutation.CLEAR_ERROR);
        commit(types.mutation.SET_RESEARCHERS, response.data);
      })
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch researchers.'));
  },
  deleteResearcher({ dispatch, commit }, researcherId) {
    feathers.service('researchers').remove(researcherId)
      .then(() => dispatch(types.action.FETCH_RESEARCHERS))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to delete researcher.'));
  },
  addResearcher({ dispatch, commit }, researcher) {
    feathers.service('researchers').create(researcher)
      .then(() => dispatch(types.action.FETCH_RESEARCHERS))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to add researcher.'));
  },
  changePassword({ rootState, commit }, newPassword) {
    feathers.service('researchers').patch(
    // eslint-disable-next-line
    rootState.authentication.researcher._id,
      { password: newPassword },
    ).then(() => commit(types.mutation.CLEAR_ERROR))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to change password.'));
  },
  submitFeed({ dispatch, commit }, posts) {
    const feed = { posts };
    feathers.service('feeds').create(feed)
      .then(() => dispatch(types.action.FETCH_FEED))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to submit feed.'));
  },
  fetchFeed({ commit }) {
    feathers.service('feeds').find()
      .then((response) => {
        if (response.data.length > 0) {
          commit(types.mutation.RESET_FEED, response.data[0].posts);
          commit(types.mutation.CLEAR_ERROR);
        } else {
          commit(types.mutation.SET_FEED, []);
        }
      }).catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch feed.'));
  },
};

export default actions;
