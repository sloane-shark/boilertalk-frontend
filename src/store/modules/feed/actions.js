import router from '@/router';
import feathers from '@/store/feathers';
import types from './types';

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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
  submitResults({ commit }, { feed, experimenterCode }) {
    feathers.service('participants').patch(null, { feed }, { query: { experimenterCode } })
      .then(() => router.push('done'))
      .catch(() => commit(types.mutation.SET_ERROR, 'Oops! Something went wrong.'));
  },
  fetchLatestFeed({ commit }) {
    feathers.service('feeds').find()
      .then((response) => {
        if (response.data.length > 0) {
          // eslint-disable-next-line
          response.data[0].posts = shuffle(response.data[0].posts);
          commit(types.mutation.SET_FEED, response.data[0]);
          commit(types.mutation.CLEAR_ERROR);
        } else {
          commit(types.mutation.SET_FEED, { posts: [] });
        }
      }).catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch feed.'));
  },
};

export default actions;
