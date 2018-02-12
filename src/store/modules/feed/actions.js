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
        commit(types.mutation.SET_ERROR, 'Failed to create profile.');
        commit(types.mutation.CLEAR_PARTICIPANT);
      });
  },
  submitResults() {},
  fetchLatestFeed({ commit }) {
    feathers.service('feeds').find()
      .then((response) => {
        if (response.data.length > 0) {
          commit(types.mutation.SET_FEED, response.data[0]);
          commit(types.mutation.CLEAR_ERROR);
        } else {
          commit(types.mutation.SET_FEED, []);
        }
      }).catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch feed.'));
  },
};

export default actions;
