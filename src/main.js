import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Cookies from 'js-cookie'

Vue.config.productionTip = false //Vue 앱이 처음 실행 될 때 나오는 경고문(배포에 대한 팁)을 출력할 것인지 물어보는 내용이다.

function init () {
  const savedToken = Cookies.get('accessToken')
  if (savedToken) {
    return store.dispatch('signinByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

/*
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
*/

init().then(() => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
