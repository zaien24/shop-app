import HomeHeader from '@/components/common/HomeHeader'
import Footer from '@/components/common/Footer'
import Signin from '@/pages/auth/Signin'

export const AuthRouters = [
  {
    path: '/auth/signin',
    name: 'Signin',
    components: {
      header: HomeHeader,
      default: Signin,
      footer: Footer
    }
  }
]
