import Vue from 'vue'
import Vuex from 'vuex'

/*
import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
*/

import authModule from './modules/auth-module'


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
  }
})
