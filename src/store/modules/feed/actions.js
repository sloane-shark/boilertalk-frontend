import router from '@/router';
import feathers from '@/store/feathers';
import types from './types';

const actions = {
  openFeed({ commit }, { experimenterCode, pass }) {
    commit(types.mutation.SET_EXPERIMENTER_CODE, experimenterCode);
    feathers.service('participants').create({ experimenterCode, pass })
      .then(() => {
        commit(types.mutation.CLEAR_ERROR);
        router.push('feed');
      }).catch(() => {
        commit(types.mutation.SET_ERROR, 'Failed to create feed.');
        commit(types.mutation.CLEAR_FEED);
      });
  },
  submitFeed() {},
};

export default actions;
