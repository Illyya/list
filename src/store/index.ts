import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from '@/store/types';

import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    isAuthorized: false,
    list: JSON.parse(localStorage.getItem('list') || '[]')
  },

  getters,
  mutations,
}

export default new Vuex.Store<RootState>(store);
