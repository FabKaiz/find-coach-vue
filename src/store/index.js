import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

export default createStore({
  state() {
    return {
      userId: 'c4',
    };
  },
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
