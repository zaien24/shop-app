import {
  FETCH_BOARD_LIST,
  FETCH_BOARD,
} from '../mutation-types'

import api from '@/api'

const boardModule = {
  namespaced: true,
  state: () => ({
    boards: [],
    board: null,
  }),
  getters: {
  },
  mutations: {
    [FETCH_BOARD_LIST] (state, boards) {
      state.boards = boards
    },
    [FETCH_BOARD] (state, board) {
      state.board = board
    },
  },
  actions: {
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
  },
}

export default boardModule
