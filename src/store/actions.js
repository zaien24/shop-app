import api from '@/api'
import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  FETCH_CODEGROUP_LIST,
  FETCH_CODEGROUP,
  FETCH_CODEDETAIL_LIST,
  FETCH_CODEDETAIL,
  FETCH_JOBCODE_LIST,
  FETCH_MEMBER_LIST, 
  FETCH_MEMBER,
  FETCH_BOARD_LIST,
  FETCH_BOARD,
  FETCH_NOTICE_LIST,
  FETCH_NOTICE,
  FETCH_ITEM_LIST,
  FETCH_ITEM
} from './mutation-types'

export default {
  signin ({ commit }, payload) {
    return api.post(`/api/authenticate?username=${payload.userid}&password=${payload.password}`, {
      username: payload.userid,
      password: payload.password
    }).then(res => {
      const { authorization } = res.headers
      const accessToken = authorization.substring(7)

      commit(SET_ACCESS_TOKEN, accessToken)

      return api.get('/users/myinfo')
    }).then(res => {
      commit(SET_MY_INFO, res.data)
    })
  },
  signinByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return api.get('/users/myinfo')
      .then(res => {
        commit(SET_MY_INFO, res.data)
      })
  },
  signout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  },
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
  fetchJobCodeList ({ commit }) {
    return api.get('/codes/job')
      .then(res => {
        commit(FETCH_JOBCODE_LIST, res.data)
      })
  },
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
  fetchBoardList ({ commit }) {
    return api.get('/boards')
      .then(res => {
        commit(FETCH_BOARD_LIST, res.data)
      })
  },
  fetchBoard ({ commit }, boardNo) {
    return api.get(`/boards/${boardNo}`)
      .then(res => {
        commit(FETCH_BOARD, res.data)
      })
  },
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
  }
}
