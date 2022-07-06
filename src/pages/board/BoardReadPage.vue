<template>
  <div align="center">
    <h2>회원게시판 상세보기</h2>
    <board-read v-if="board" :board="board"/>
    <p v-else>loading...</p>
    <template v-if="isAuthorized && board && (myinfo.userId === board.writer)">
      <router-link :to="{ name: 'BoardModifyPage', params: { boardNo } }">편집</router-link>
      <button @click="onDelete">삭제</button>
    </template>
    <template v-if="isAdmin">
      <button @click="onDelete">삭제</button>
    </template>     
    <router-link :to="{ name: 'BoardListPage' }">목록</router-link>
  </div>
</template>

<script>
import api from '@/api'
import BoardRead from '@/components/board/BoardRead'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'BoardReadPage',
  components: { BoardRead },
  props: {
    boardNo: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isAuthorized',
      'isAdmin'
    ]),
    ...mapState([
      'board',
      'myinfo'
    ])
  },
  created () {
    this.fetchBoard(this.boardNo)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onDelete () {
      const {boardNo, writer} = this.board
      api.delete(`/boards/${boardNo}?writer=${writer}`)
        .then(res => {
          alert('삭제가 완료되었습니다.')
          this.$router.push({name: 'BoardListPage'})
        })
        .catch(err => {
          if (err.response.status === 401) {
            alert('로그인이 필요합니다.')
            this.$router.push({ name: 'Signin' })
          } else if (err.response.status === 403) {
            alert('접근 권한이 없습니다.')
            this.$router.back()
          } else {
            alert(err.response.data.message)
          }
        })
    },
    ...mapActions([
      'fetchBoard'
    ])
  }
}
</script>
