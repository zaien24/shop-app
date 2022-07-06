<template>
  <div align="center">
    <h2>회원 상세보기</h2>
    <member-read v-if="member && jobCodes"
        :member="member"
        :jobCodes="jobCodes"/>
    <p v-else>loading...</p>
    <router-link :to="{ name: 'MemberModifyPage', params: { userNo } }">편집</router-link>
    <button @click="onDelete">삭제</button>
    <router-link :to="{ name: 'MemberListPage' }">목록</router-link>
  </div>
</template>

<script>
import api from '@/api'
import MemberRead from '@/components/member/MemberRead'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MemberReadPage',
  components: { MemberRead },
  props: {
    userNo: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState('commonStore', [
      'jobCodes'
    ]),
    ...mapState('memberStore', [
      'member'
    ])
  },
  created () {
    this.fetchJobCodeList()
      .then(res => {
        this.fetchMember(this.userNo)
          .catch(err => {
            alert(err.response.data.message)
            this.$router.back()
          })
      })
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onDelete () {
      const {userNo} = this.member
      api.delete(`/users/${userNo}`)
        .then(res => {
          alert('삭제가 완료되었습니다.')
          this.$router.push({name: 'MemberListPage'})
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    ...mapActions('commonStore', [
      'fetchJobCodeList'
    ]),
    ...mapActions('memberStore', [
      'fetchMember',
    ])
  }
}
</script>
