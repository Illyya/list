import { GetterTree } from 'vuex'
import { RootState } from '@/store/types';

const getters: GetterTree<RootState, RootState> = {
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
}

export default getters;