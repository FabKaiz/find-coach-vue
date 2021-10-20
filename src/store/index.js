import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

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
    requests: requestsModule,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
