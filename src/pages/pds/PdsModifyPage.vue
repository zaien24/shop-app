<template>
  <div align="center">
    <h2>공개자료실 수정</h2>
    <pds-modify-form v-if="pdsItem && attachments"
        :pdsItem="pdsItem"
        :attachments="attachments"
        @submit="onSubmit"
        @attach="onAttach"
        @removeAttach="onRemoveAttach" />
    <p v-else>loading...</p>
  </div>
</template>

<script>
import api from '@/api'
import PdsModifyForm from '@/components/pds/PdsModifyForm'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PdsModifyPage',
  components: { PdsModifyForm },
  props: {
    itemId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('pdsStore', [ 'pdsItem', 'attachments' ])
  },
  created () {
    this.fetchPds(this.itemId)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.back()
      })
  },
  methods: {
    onSubmit (payload) {
      const { itemName, description } = payload

      const itemObject = {
        itemId : this.itemId,
        itemName : itemName,
        description : description,
        files : this.attachments
      }

      api.put(`/pds/${this.itemId}`, itemObject)
        .then(res => {
          alert('수정이 완료되었습니다.')
          this.$router.push({
            name: 'PdsReadPage',
            params: { itemId: res.data.itemId.toString() }
          })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    onAttach (payload) {
      const { file } = payload
      this.addAttach(file)
    },
    onRemoveAttach (index) {
      this.removeAttach(index)
    },
    ...mapActions('pdsStore', [
      'addAttach',
      'resetAttach',
      'removeAttach',
      'fetchPds'
    ])
  }
}
</script>
