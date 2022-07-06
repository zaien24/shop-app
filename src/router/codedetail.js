import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeDetailListPage from '@/pages/codedetail/CodeDetailListPage'
import CodeDetailRegisterPage from '@/pages/codedetail/CodeDetailRegisterPage'
import CodeDetailModifyPage from '@/pages/codedetail/CodeDetailModifyPage'
import CodeDetailReadPage from '@/pages/codedetail/CodeDetailReadPage'

export const CodeDetailRouters = [
  {
    path: '/codedetail',
    name: 'CodeDetailListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CodeDetailListPage,
      footer: Footer
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAdmin } = store.getters
      */
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/codedetail/register',
    name: 'CodeDetailRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CodeDetailRegisterPage,
      footer: Footer
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAdmin } = store.getters
      */
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/codedetail/:groupCode/:codeValue',
    name: 'CodeDetailReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CodeDetailReadPage,
      footer: Footer
    },
    props: {
      default: true
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAdmin } = store.getters
      */
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/codedetail/:groupCode/:codeValue/modify',
    name: 'CodeDetailModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CodeDetailModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAdmin } = store.getters
      */
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  }
]
