<template>
  <div align="center">
    <h2>최초관리자 등록</h2>
    <admin-setup-form @submit="onSubmit"/>
  </div>
</template>

<script>
import api from '@/api'
import AdminSetupForm from '@/components/member/AdminSetupForm'

export default {
  name: 'AdminSetupPage',
  components: { AdminSetupForm },
  methods: {
    onSubmit (payload) {
      const { userId, userName, userPw } = payload
      api.post('/users/setup', { userId, userName, userPw })
        .then(res => {
          alert('등록이 완료되었습니다.')
          this.$router.push({
            name: 'Home'
          })
        })
        .catch(err => {
          alert(err.response.data)
        })
    }
  }
}
</script>
