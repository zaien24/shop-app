import Vue from 'vue'
import Router from 'vue-router'
import { HomeRouters } from '@/router/home'
import { AuthRouters } from '@/router/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...HomeRouters,
    ...AuthRouters
  ]
})
