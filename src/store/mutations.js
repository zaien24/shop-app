import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO
} from './mutation-types'

import api from '@/api'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }
  },
  [SET_MY_INFO] (state, myinfo) {
    if (myinfo) {
      state.myinfo = myinfo
    }
  }
}
