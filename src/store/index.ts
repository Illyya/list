import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    isAuthorized: false,
    list: JSON.parse(localStorage.getItem('list') || '[]')
  },

  getters: {
    isAuthorized: state => state.isAuthorized,
    list: state => state.list,
    maxId: state => {
      const idArr = state.list.map(el => el.id);

      if (idArr.length) {
        return Math.max(...idArr);
      } else {
        return 0
      }
    }
  },

  mutations: {
    AUTH(state) {
      state.isAuthorized = true;
    },
    ADD_ITEM(state, item) {
      state.list.push(item);

      localStorage.setItem('list', JSON.stringify(state.list));
    },
    REMOVE_ITEM(state, idItem) {
      state.list = state.list.filter(el => el.id !== idItem);

      state.list = state.list.map((el, index) => {
        el.id = index + 1;

        return el;
      });

      localStorage.setItem('list', JSON.stringify(state.list));
    },
    EDIT_ITEM(state, item) {
      const indexItem = state.list.findIndex(el => el.id === item.id);

      if (indexItem > -1) {
        state.list.splice(indexItem, 1, item);
      }

      localStorage.setItem('list', JSON.stringify(state.list));
    },
    SORT_ASCENDING(state) {
      state.list.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
              nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      });
    },
    SORT_DESCENDING(state) {
      state.list.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
              nameB = b.name.toLowerCase();

        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;

        return 0;
      });
    }
  },
}

export default new Vuex.Store<RootState>(store);
