<template>
  <div align="center">
    <h2>코드 등록</h2>
    <code-detail-register-form @submit="onSubmit" :codeGroups="codeGroups"/>
  </div>
</template>

<script>
import api from '@/api'
import CodeDetailRegisterForm from '@/components/codedetail/CodeDetailRegisterForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CodeDetailRegisterPage',
  components: { CodeDetailRegisterForm },
  computed: {
    ...mapState('codeGroupStore', [
      'codeGroups'
    ])
  },
  created () {
    this.fetchCodeGroupList()
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onSubmit (payload) {
      const { groupCode, codeValue, codeName } = payload
      api.post('/codedetails', { groupCode, codeValue, codeName })
        .then(res => {
          alert('등록이 완료되었습니다.')
          this.$router.push({
            name: 'CodeDetailReadPage',
            params: { groupCode: res.data.groupCode,  codeValue: res.data.codeValue}
          })
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
    ...mapActions('codeGroupStore', [
      'fetchCodeGroupList'
    ])
  }
}
</script>
