import {
  FETCH_CODEGROUP_LIST,
  FETCH_CODEGROUP,
} from '../mutation-types'

import api from '@/api'

const codeGroupModule = {
  namespaced: true,
  state: () => ({
    codeGroups: [],
    codeGroup: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_CODEGROUP_LIST] (state, codeGroups) {
      state.codeGroups = codeGroups
    },
    [FETCH_CODEGROUP] (state, codeGroup) {
      state.codeGroup = codeGroup
    },
  },
  actions: {
    fetchCodeGroupList ({ commit }) {
      return api.get('/codegroups')
        .then(res => {
          commit(FETCH_CODEGROUP_LIST, res.data)
        })
    },
    fetchCodeGroup ({ commit }, groupCode) {
      return api.get(`/codegroups/${groupCode}`)
        .then(res => {
          commit(FETCH_CODEGROUP, res.data)
        })
    },
  },
}

export default codeGroupModule
