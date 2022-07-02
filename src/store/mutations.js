import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  FETCH_CODEGROUP_LIST,
  FETCH_CODEGROUP,
  FETCH_CODEDETAIL_LIST,
  FETCH_CODEDETAIL
} from './mutation-types'

import api from '@/api'
import Cookies from 'js-cookie'

export default {
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
  [FETCH_CODEGROUP_LIST] (state, codeGroups) {
    state.codeGroups = codeGroups
  },
  [FETCH_CODEGROUP] (state, codeGroup) {
    state.codeGroup = codeGroup
  },
  [FETCH_CODEDETAIL_LIST] (state, codeDetails) {
    state.codeDetails = codeDetails
  },
  [FETCH_CODEDETAIL] (state, codeDetail) {
    state.codeDetail = codeDetail
  }
}
