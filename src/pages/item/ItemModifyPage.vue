<template>
  <div align="center">
    <h2>상품 수정</h2>
    <item-modify-form v-if="item"
        :item="item"
        @submit="onSubmit" />
    <p v-else>loading...</p>
  </div>
</template>

<script>
import api from '@/api'
import ItemModifyForm from '@/components/item/ItemModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ItemModifyPage',
  components: { ItemModifyForm },
  props: {
    itemId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('itemStore', [ 'item' ])
  },
  created () {
    this.fetchItem(this.itemId)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    ...mapActions('itemStore', [
      'fetchItem'
    ]),
    onSubmit (payload) {
      const { itemName, price, description, file, previewFile } = payload

      const itemObject = {
        itemId : this.itemId,
        itemName : itemName,
        price : price,
        description : description
      }

      let formData = new FormData()
		
      formData.append("file", file)
      formData.append("file2", previewFile)
      formData.append("item",JSON.stringify(itemObject))

      api.put(`/items/${this.itemId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        alert('수정이 완료되었습니다.')
        this.$router.push({
          name: 'ItemReadPage',
          params: { itemId: res.data.itemId.toString() }
        })
      }).catch(err => {
        alert(err.response.data.message)
      })
    }
  }
}
</script>
