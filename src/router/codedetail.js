import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeDetailListPage from '@/pages/codedetail/CodeDetailListPage'
import CodeDetailRegisterPage from '@/pages/codedetail/CodeDetailRegisterPage'

export const CodeDetailRouters = [
    // 목록 화면 라우트 정의
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
            const { isAdmin } = store.getters
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
          const { isAdmin } = store.getters
          if (!isAdmin) {
            alert('관리자 권한이 필요합니다!')
            next({ name: 'Signin' })
          }
          next()
        }
      },
]