import {
  FETCH_CHARGECOIN_LIST,
  FETCH_PAYCOIN_LIST,
} from '../mutation-types'

import api from '@/api'

const coinModule = {
  namespaced: true,
  state: () => ({
    chargeCoins: [],
    payCoins: [],
  }),
  getters: {
  },
  mutations: {
    [FETCH_CHARGECOIN_LIST] (state, chargeCoins) {
      state.chargeCoins = chargeCoins
    },
    [FETCH_PAYCOIN_LIST] (state, payCoins) {
      state.payCoins = payCoins
    },
  },
  actions: {
    fetchChargeCoinList ({ commit }) {
      return api.get('/coins')
        .then(res => {
          commit(FETCH_CHARGECOIN_LIST, res.data)
        })
    },
    fetchPayCoinList ({ commit }) {
      return api.get('/coins/pay')
        .then(res => {
          commit(FETCH_PAYCOIN_LIST, res.data)
        })
    },
  },
}

export default coinModule
