<template>
  <div align="right">
    <div v-if="isAuthorized">
      <span>{{ myinfo.userName }}님 환영합니다.</span>
      <button @click="onClickSignout">로그아웃</button>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainHeader',
    computed: {
    ...mapState('authStore', [ 'myinfo' ]),
    ...mapGetters('authStore', [ 'isAuthorized', 'isAdmin' ])
  },
  methods: {
    onClickSignout () {
      this.signout()
      alert('로그아웃 되었습니다.')
      this.$router.push({ name: 'Home' })
    },
    ...mapActions('authStore', [ 'signout' ])
  }
}
</script>
