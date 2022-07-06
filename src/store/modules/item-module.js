import {
  FETCH_ITEM_LIST,
  FETCH_ITEM,
} from '../mutation-types'

import api from '@/api'

const itemModule = {
  namespaced: true,
  state: () => ({
    items: [],
    item: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_ITEM_LIST] (state, items) {
      state.items = items
    },
    [FETCH_ITEM] (state, item) {
      state.item = item
    },
  },
  actions: {
    fetchItemList ({ commit }) {
      return api.get('/items')
        .then(res => {
          commit(FETCH_ITEM_LIST, res.data)
        })
    },
    fetchItem ({ commit }, itemId) {
      return api.get(`/items/${itemId}`)
        .then(res => {
          commit(FETCH_ITEM, res.data)
        })
    },
  },
}

export default itemModule
