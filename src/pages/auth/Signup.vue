<template>
  <div align="center">
    <h2>회원가입</h2>
    <signup-form @submit="onSubmit" :jobCodes="jobCodes"/>
    <p><router-link :to="{ name: 'Signin' }">로그인</router-link></p>
  </div>
</template>

<script>
import api from '@/api'
import SignupForm from '@/components/auth/SignupForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Signup',
  components: { SignupForm },
  computed: {
    ...mapState('commonStore', [ 'jobCodes' ])
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
          alert('회원가입이 완료되었습니다.')
          this.$router.push({ name: 'Signin' })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    ...mapActions('commonStore', [ 'fetchJobCodeList' ])
  }
}
</script>
