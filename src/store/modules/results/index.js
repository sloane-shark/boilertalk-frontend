import state from './state';
import mutations from './mutations';
import actions from './actions';

const results = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default results;
