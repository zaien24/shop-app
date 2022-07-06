<template>
  <div align="center">
    <h2>구매상품 상세보기</h2>
    <user-item-read v-if="userItem" :userItem="userItem"/>
    <p v-else>loading...</p>
    <router-link :to="{ name: 'UserItemListPage' }">목록</router-link>
  </div>
</template>

<script>
import api from '@/api'
import UserItemRead from '@/components/useritem/UserItemRead'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserItemReadPage',
  components: { UserItemRead },
  props: {
    userItemNo: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState([
      'userItem'
    ])
  },
  created () {
    this.fetchUserItem(this.userItemNo)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    ...mapActions([
      'fetchUserItem'
    ])
  }
}
</script>
