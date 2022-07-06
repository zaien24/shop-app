<template>
  <div align="center">
    <h2>상품 상세보기</h2>
    <item-read v-if="item" :item="item"/>
    <p v-else>loading...</p>
    <router-link v-if="isAdmin" :to="{ name: 'ItemModifyPage', params: { itemId } }">편집</router-link>
    <button v-if="isAdmin" @click="onDelete">삭제</button>
    <button v-if="isMember" @click="onBuy">구매</button>
    <router-link :to="{ name: 'ItemListPage' }">목록</router-link>
  </div>
</template>

<script>
import api from '@/api'
import ItemRead from '@/components/item/ItemRead'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'ItemReadPage',
  props: {
    itemId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([
      'item'
    ]),
    ...mapGetters([ 'isAdmin', 'isMember' ])
  },
  created () {
    this.fetchItem(this.itemId)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onDelete () {
      const {itemId} = this.item
      api.delete(`/items/${itemId}`)
        .then(res => {
          alert('삭제가 완료되었습니다.')
          this.$router.push({name: 'ItemListPage'})
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    onBuy () {
      const {itemId} = this.item
      api.get(`/items/buy/${itemId}`)
        .then(res => {
          alert(res.data)
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
      'fetchItem'
    ])
  },
  components: {
    ItemRead
  }
}
</script>
