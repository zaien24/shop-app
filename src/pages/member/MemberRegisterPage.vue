<template>
  <div align="center">
    <h2>회원 등록</h2>
    <member-register-form @submit="onSubmit" :jobCodes="jobCodes"/>
  </div>
</template>

<script>
import api from '@/api'
import MemberRegisterForm from '@/components/member/MemberRegisterForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MemberRegisterPage',
  components: { MemberRegisterForm },
  computed: {
    ...mapState([
      'jobCodes'
    ])
  },
  created () {
    this.fetchJobCodeList()
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onSubmit (payload) {
      const { userId, userName, userPw, job } = payload
      api.post('/users', { userId, userName, userPw, job })
        .then(res => {
          alert('등록이 완료되었습니다.')
          this.$router.push({
            name: 'MemberReadPage',
            params: { userNo: res.data.userNo }
          })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    ...mapActions([
      'fetchJobCodeList'
    ])
  }
}
</script>
