<template>
  <div align="center">
    <h2>로그인</h2>
    <signin-form @submit="onSubmit"/>
    <p><router-link :to="{ name: 'Signup' }">회원가입</router-link></p>
  </div>
</template>

<script>
import SigninForm from '@/components/auth/SigninForm'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  components: {
    SigninForm
  },
  methods: {
    onSubmit (payload) {
      this.signin(payload).then(res => {
        alert('로그인 되었습니다.')
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        alert(err.response.data.message)
      })
    },
    ...mapActions('authStore', [ 'signin' ])
  }
}
</script>
