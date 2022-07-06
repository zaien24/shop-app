import {
  FETCH_CODEDETAIL_LIST,
  FETCH_CODEDETAIL,
} from '../mutation-types'

import api from '@/api'

const codeDetailModule = {
  namespaced: true,
  state: () => ({
    codeDetails: [],
    codeDetail: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_CODEDETAIL_LIST] (state, codeDetails) {
      state.codeDetails = codeDetails
    },
    [FETCH_CODEDETAIL] (state, codeDetail) {
      state.codeDetail = codeDetail
    },
  },
  actions: {
    fetchCodeDetailList ({ commit }) {
      return api.get('/codedetails')
        .then(res => {
          commit(FETCH_CODEDETAIL_LIST, res.data)
        })
    },
    fetchCodeDetail ({ commit }, payload) {
      const {groupCode, codeValue} = payload
      
      return api.get(`/codedetails/${groupCode}/${codeValue}`)
        .then(res => {
          commit(FETCH_CODEDETAIL, res.data)
        })
    },
  },
}

export default codeDetailModule
