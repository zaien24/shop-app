import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import ItemListPage from '@/pages/item/ItemListPage'
import ItemRegisterPage from '@/pages/item/ItemRegisterPage'
import ItemModifyPage from '@/pages/item/ItemModifyPage'
import ItemReadPage from '@/pages/item/ItemReadPage'

export const ItemRouters = [
  {
    path: '/item',
    name: 'ItemListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemListPage,
      footer: Footer
    }
  },
  {
    path: '/item/register',
    name: 'ItemRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemRegisterPage,
      footer: Footer
    },
    beforeEnter (to, from, next) {
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/item/:itemId',
    name: 'ItemReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemReadPage,
      footer: Footer
    },
    props: {
      default: true
    }
  },
  {
    path: '/item/:itemId/modify',
    name: 'ItemModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
    beforeEnter (to, from, next) {
      const isAdmin = store.getters['authStore/isAdmin']
      if (!isAdmin) {
        alert('관리자 권한이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  }
]
