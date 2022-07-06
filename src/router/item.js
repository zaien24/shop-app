import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import ItemListPage from '@/pages/item/ItemListPage'

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
]
