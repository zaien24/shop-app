import {
  FETCH_PDS_LIST,
  FETCH_PDS,
  FETCH_ATTACH_LIST,
  ADD_ATTACH,
  RESET_ATTACH,
  REMOVE_ATTACH
} from '../mutation-types'

import api from '@/api'

const pdsModule = {
  namespaced: true,
  state: () => ({
    pdsItems: [],
    pdsItem: null,
    attachments: []
  }),
  getters: {
  },
  mutations: {
    [FETCH_PDS_LIST] (state, pdsItems) {
      state.pdsItems = pdsItems
    },
    [FETCH_PDS] (state, pdsItem) {
      state.pdsItem = pdsItem
    },
    [FETCH_ATTACH_LIST] (state, attachments) {
      state.attachments = attachments
    },
    [ADD_ATTACH] (state, attach) {
      state.attachments.push(attach)
    },
    [RESET_ATTACH] (state) {
      state.attachments = []
    },
    [REMOVE_ATTACH] (state, index) {
      state.attachments.splice(index, 1)
    }
  },
  actions: {
    fetchPdsList ({ commit }) {
      return api.get('/pds')
        .then(res => {
          commit(FETCH_PDS_LIST, res.data)
        })
    },
    fetchPds ({ commit }, itemId) {
      return api.get(`/pds/${itemId}`)
        .then(res => {
          commit(FETCH_PDS, res.data)
  
          return api.get(`/pds/attach/${itemId}`)
        }).then(res => {
          commit(FETCH_ATTACH_LIST, res.data)
        })
    },
    addAttach ({ commit }, file) {
      let formData = new FormData()
      
      formData.append("file", file)
        
      return api.post('/pds/upload', formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(res => {
          commit(ADD_ATTACH, res.data)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    resetAttach ({ commit }) {
      commit(RESET_ATTACH)
    },
    removeAttach ({ commit }, index) {
      commit(REMOVE_ATTACH, index)
    }
  },
}

export default pdsModule
