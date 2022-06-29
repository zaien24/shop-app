import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO
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
  }
}
