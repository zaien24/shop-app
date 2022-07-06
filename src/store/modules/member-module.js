import {
  FETCH_MEMBER_LIST,
  FETCH_MEMBER,
} from '../mutation-types'

import api from '@/api'

const memberModule = {
  namespaced: true,
  state: () => ({
    members: [],
    member: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_MEMBER_LIST] (state, members) {
      state.members = members
    },
    [FETCH_MEMBER] (state, member) {
      state.member = member
    },
  },
  actions: {
    fetchMemberList ({ commit }) {
      return api.get('/users')
        .then(res => {
          commit(FETCH_MEMBER_LIST, res.data)
        })
    },
    fetchMember ({ commit }, userNo) {
      return api.get(`/users/${userNo}`)
        .then(res => {
          commit(FETCH_MEMBER, res.data)
        })
    },
  },
}

export default memberModule
