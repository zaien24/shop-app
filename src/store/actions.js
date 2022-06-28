import api from '@/api'
import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO
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
  }
}
