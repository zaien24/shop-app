import Vue from 'vue'
import Vuex from 'vuex'

/*
import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
*/

import authModule from './modules/auth-module'
import boardModule from './modules/board-module'
import codeGroupModule from './modules/codegroup-module'
import codeDetailModule from './modules/codedetail-module'
import coinModule from './modules/coin-module'
import commonModule from './modules/common-module'
import itemModule from './modules/item-module'
import memberModule from './modules/member-module'
import noticeModule from './modules/notice-module'
import pdsModule from './modules/pds-module'
import userItemModule from './modules/useritem-module'

Vue.use(Vuex)

/*
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
*/

export default new Vuex.Store({
  modules: {
    authStore: authModule,
    boardStore: boardModule,
    codeGroupStore: codeGroupModule,
    codeDetailStore: codeDetailModule,
    coinStore: coinModule,
    commonStore: commonModule,
    itemStore: itemModule,
    memberStore: memberModule,
    noticeStore: noticeModule,
    pdsStore: pdsModule,
    userItemStore: userItemModule,
  }
})
