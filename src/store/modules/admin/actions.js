import feathers from '@/store/feathers';
import types from './types';

const actions = {
  fetchResearchers({ commit }) {
    feathers.service('researchers').find()
      .then((researchers) => {
        commit(types.mutation.CLEAR_ERROR);
        commit(types.mutation.SET_RESEARCHERS, researchers.data);
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
};

export default actions;
