import {
  FETCH_JOBCODE_LIST,
} from '../mutation-types'

import api from '@/api'

const commonModule = {
  namespaced: true,
  state: () => ({
    jobCodes: [],
  }),
  getters: {
  },
  mutations: {
    [FETCH_JOBCODE_LIST] (state, jobCodes) {
      state.jobCodes = jobCodes
    },
  },
  actions: {
    fetchJobCodeList ({ commit }) {
      return api.get('/codes/job')
        .then(res => {
          commit(FETCH_JOBCODE_LIST, res.data)
        })
    },
  },
}

export default commonModule
