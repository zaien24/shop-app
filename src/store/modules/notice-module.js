import {
  FETCH_NOTICE_LIST,
  FETCH_NOTICE,
} from '../mutation-types'

import api from '@/api'

const noticeModule = {
  namespaced: true,
  state: () => ({
    notices: [],
    notice: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_NOTICE_LIST] (state, notices) {
      state.notices = notices
    },
    [FETCH_NOTICE] (state, notice) {
      state.notice = notice
    },
  },
  actions: {
    fetchNoticeList ({ commit }) {
      return api.get('/notices')
        .then(res => {
          commit(FETCH_NOTICE_LIST, res.data)
        })
    },
    fetchNotice ({ commit }, noticeNo) {
      return api.get(`/notices/${noticeNo}`)
        .then(res => {
          commit(FETCH_NOTICE, res.data)
        })
    },
  },
}

export default noticeModule
