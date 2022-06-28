<template>
  <div align="right">
	  <!--
    <router-link :to="{ name: 'Signin' }">로그인</router-link>
    -->
    
    <div v-if="isAuthorized">
      <span>{{ myinfo.userName }}님 환영합니다.</span>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MainHeader',
  computed: {
    ...mapState([ 'myinfo' ]),
    ...mapGetters([ 'isAuthorized', 'isAdmin' ])
  }
}
</script>
