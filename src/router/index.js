import Vue from 'vue'
import Router from 'vue-router'
import { HomeRouters } from '@/router/home'
import { AuthRouters } from '@/router/auth'
import { MemberRouters } from '@/router/member'
import { CodeGroupRouters } from '@/router/codegroup'
import { CodeDetailRouters } from '@/router/codedetail'
import { BoardRouters } from '@/router/board'
import { NoticeRouters } from '@/router/notice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...HomeRouters,
    ...AuthRouters,
    ...MemberRouters,
    ...CodeGroupRouters,
    ...CodeDetailRouters,
    ...BoardRouters,
    ...NoticeRouters
  ]
})
