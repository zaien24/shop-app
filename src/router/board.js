import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import BoardListPage from '@/pages/board/BoardListPage'
import BoardRegisterPage from '@/pages/board/BoardRegisterPage'
import BoardModifyPage from '@/pages/board/BoardModifyPage'
import BoardReadPage from '@/pages/board/BoardReadPage'

export const BoardRouters = [
  {
    path: '/board',
    name: 'BoardListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: BoardListPage,
      footer: Footer
    }
  },
  {
    path: '/board/register',
    name: 'BoardRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: BoardRegisterPage,
      footer: Footer
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAuthorized } = store.getters
      */
      const isAuthorized = store.getters['authStore/isAuthorized']
      if (!isAuthorized) {
        alert('로그인이 필요합니다!')
        next({ name: 'Signin' })
      }
      next()
    }
  },
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: BoardReadPage,
      footer: Footer
    },
    props: {
      default: true
    }
  },
  {
    path: '/board/:boardNo/modify',
    name: 'BoardModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: BoardModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
    beforeEnter (to, from, next) {
      /*      
      const { isAuthorized } = store.getters
      */
      const isAuthorized = store.getters['authStore/isAuthorized']
      if (!isAuthorized) {
        alert('로그인이 필요합니다!')
        next({ name: 'Signin' })
      }
      store.dispatch('boardStore/fetchBoard', to.params.boardNo)
        .then(() => {
          const board = store.state.boardStore.board 
          const isAuthor = board.writer === store.state.authStore.myinfo.userId
          if (isAuthor) {
            next()
          } else {
            alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')
            next(false)
          }
        }).catch(err => {
          alert(err.response.data.message)
          next(false)
        })
    }
  }
]
