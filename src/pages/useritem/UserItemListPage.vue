<template>
  <div align="center">
    <h2>구매상품 목록</h2>
    <user-item-list :userItems="userItems" @download="onDownload"/>
  </div>
</template>

<script>
import api from '@/api'
import UserItemList from '@/components/useritem/UserItemList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserItemListPage',
  components: { UserItemList },
  computed: {
    ...mapState('userItemStore', [ 'userItems' ])
  },
  mounted () {
    this.fetchUserItemList()
  },
  methods: {
    onDownload (payload) {
      const { userItemNo } = payload

      api.get(`/useritems/download/${userItemNo}`, {
            responseType: 'blob'
      }).then(response => {
          const contentDisposition = response.request.getResponseHeader("Content-Disposition")
          
          const downloadFilename = contentDisposition.substring(22, contentDisposition.length - 1)
          const decodedDownloadFilename = decodeURIComponent(escape(downloadFilename))
          
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', decodedDownloadFilename)
          document.body.appendChild(link)
          link.click()
      })
    },
    ...mapActions('userItemStore', ['fetchUserItemList'])
  }
}
</script>
