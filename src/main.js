import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Cookies from 'js-cookie'

Vue.config.productionTip = false

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
