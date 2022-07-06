<template>
  <div align="center">
    <h2>코드그룹 목록</h2>
    <router-link :to="{ name: 'CodeGroupRegisterPage' }">새로만들기</router-link>
    <code-group-list :codeGroups="codeGroups"/>
  </div>
</template>

<script>
import CodeGroupList from '@/components/codegroup/CodeGroupList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CodeGroupListPage',
  components: { CodeGroupList },
  computed: {
    ...mapState('codeGroupStore', [ 'codeGroups' ])
  },
  mounted () {
    this.fetchCodeGroupList()
  },
  methods: {
    ...mapActions('codeGroupStore', ['fetchCodeGroupList'])
  }
}
</script>
