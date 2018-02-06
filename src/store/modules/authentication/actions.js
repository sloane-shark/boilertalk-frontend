import router from '@/router';
import feathers from '@/store/feathers';
import types from './types';

const actions = {
  // call standalone for JWT session reauth
  auth({ commit }, options) {
    feathers.authenticate(options || {})
      .then(response => feathers.passport.verifyJWT(response.accessToken))
      .then(payload => feathers.service('researchers').get(payload.userId))
      .then((user) => {
        commit(types.mutation.CLEAR_ERROR);
        commit(types.mutation.SET_RESEARCHER, user);
        commit(types.mutation.SET_LOGGED_IN);
        router.push('admin/feed');
      })
      .catch(() => {
        if (options) {
          commit(types.mutation.SET_ERROR, 'Failed to login.');
        }
      });
  },
  logIn({ dispatch }, { email, password }) {
    dispatch('auth', {
      strategy: 'local',
      email,
      password,
    });
  },
  logOut({ commit }) {
    feathers.logout()
      .then(() => {
        commit(types.mutation.SET_LOGGED_OUT);
        router.push('/login');
      });
  },
};

export default actions;
