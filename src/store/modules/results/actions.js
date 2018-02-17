import feathers from '@/store/feathers';
import types from './types';

const actions = {
  fetchResults({ commit }) {
    feathers.service('participants').find()
      .then(res => commit(types.mutation.SET_PARTICIPANTS, res.data));
  },
};

export default actions;
