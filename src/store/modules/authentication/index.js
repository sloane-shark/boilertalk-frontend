import state from './state';
import mutations from './mutations';
import actions from './actions';

const authentication = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default authentication;
