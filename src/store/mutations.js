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
  FETCH_ITEM,
  FETCH_CHARGECOIN_LIST,
  FETCH_PAYCOIN_LIST,
  FETCH_USERITEM_LIST,
  FETCH_USERITEM,
  FETCH_PDS_LIST,
  FETCH_PDS,
  FETCH_ATTACH_LIST,
  ADD_ATTACH,
  RESET_ATTACH,
  REMOVE_ATTACH
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
  },
  [FETCH_JOBCODE_LIST] (state, jobCodes) {
    state.jobCodes = jobCodes
  },
  [FETCH_MEMBER_LIST] (state, members) {
    state.members = members
  },
  [FETCH_MEMBER] (state, member) {
    state.member = member
  },
  [FETCH_BOARD_LIST] (state, boards) {
    state.boards = boards
  },
  [FETCH_BOARD] (state, board) {
    state.board = board
  },
  [FETCH_NOTICE_LIST] (state, notices) {
    state.notices = notices
  },
  [FETCH_NOTICE] (state, notice) {
    state.notice = notice
  },
  [FETCH_ITEM_LIST] (state, items) {
    state.items = items
  },
  [FETCH_ITEM] (state, item) {
    state.item = item
  },
  [FETCH_CHARGECOIN_LIST] (state, chargeCoins) {
    state.chargeCoins = chargeCoins
  },
  [FETCH_PAYCOIN_LIST] (state, payCoins) {
    state.payCoins = payCoins
  },
  [FETCH_USERITEM_LIST] (state, userItems) {
    state.userItems = userItems
  },
  [FETCH_USERITEM] (state, userItem) {
    state.userItem = userItem
  },
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
}
