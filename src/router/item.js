import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import ItemListPage from '@/pages/item/ItemListPage'
import ItemRegisterPage from '@/pages/item/ItemRegisterPage'
import ItemReadPage from '@/pages/item/ItemReadPage'
import ItemModifyPage from '@/pages/item/ItemModifyPage'

export const ItemRouters = [
    // 목록 화면 라우터 정의 
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
      // 등록 화면 라우트 정의
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
          const { isAdmin } = store.getters
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
          const { isAdmin } = store.getters
          if (!isAdmin) {
            alert('관리자 권한이 필요합니다!')
            next({ name: 'Signin' })
          }
          next()
        }
      }

]
