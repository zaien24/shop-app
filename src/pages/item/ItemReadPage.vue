<template>
  <div align="center">
    <h2>상품 상세보기</h2>
    <item-read v-if="item" :item="item"/>
    <p v-else>loading...</p>
    <router-link v-if="isAdmin" :to="{ name: 'ItemModifyPage', params: { itemId } }">편집</router-link>
    <button v-if="isAdmin" @click="onDelete">삭제</button>
    <router-link :to="{ name: 'ItemListPage' }">목록</router-link>
  </div>
</template>

<script>
import api from '@/api'
import ItemRead from '@/components/item/ItemRead'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'ItemReadPage',
  components: { ItemRead },
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
    ...mapActions([
      'fetchItem'
    ])
  }
  
}
</script>
