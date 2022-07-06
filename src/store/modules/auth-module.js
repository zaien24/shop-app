import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
} from '../mutation-types'

import api from '@/api'
import Cookies from 'js-cookie'

const authModule = {
  namespaced: true,
  state: () => ({
    accessToken: '',
    myinfo: null,
  }),
  getters: {
    isAuthorized (state) {
      return state.accessToken.length > 0 && !!state.myinfo
    },
    isAdmin (state, getters) {
      return getters.isAuthorized && state.myinfo.authList[0].auth === 'ROLE_ADMIN'
    },
    isMember (state, getters) {
      return getters.isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
    }
  },
  mutations: {
    [SET_ACCESS_TOKEN] (state, accessToken) {
      if (accessToken) {
        state.accessToken = accessToken
  
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  
        Cookies.set('accessToken', accessToken, { expires: 1 })
      }
    },
    [SET_MY_INFO] (state, myinfo) {
      if (myinfo) {
        state.myinfo = myinfo
      }
    },
    [DESTROY_ACCESS_TOKEN] (state) {
      state.accessToken = ''
      delete api.defaults.headers.common.Authorization
      Cookies.remove('accessToken')
    },
    [DESTROY_MY_INFO] (state) {
      state.myinfo = null
    },
  },
  actions: {
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
  },
}

export default authModule
