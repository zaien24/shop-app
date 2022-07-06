import {
  FETCH_USERITEM_LIST,
  FETCH_USERITEM,
} from '../mutation-types'

import api from '@/api'

const userItemModule = {
  namespaced: true,
  state: () => ({
    userItems: [],
    userItem: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_USERITEM_LIST] (state, userItems) {
      state.userItems = userItems
    },
    [FETCH_USERITEM] (state, userItem) {
      state.userItem = userItem
    },
  },
  actions: {
    fetchUserItemList ({ commit }) {
      return api.get('/useritems')
        .then(res => {
          commit(FETCH_USERITEM_LIST, res.data)
        })
    },
    fetchUserItem ({ commit }, userItemNo) {
      return api.get(`/useritems/${userItemNo}`)
        .then(res => {
          commit(FETCH_USERITEM, res.data)
        })
    },
  },
}

export default userItemModule
