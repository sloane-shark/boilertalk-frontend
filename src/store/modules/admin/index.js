import state from './state';
import mutations from './mutations';
import actions from './actions';

const admin = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default admin;
