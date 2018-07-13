import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Sign from '@/pages/Sign'
import SignUpSuccess from '@/pages/SignUpSuccess'
import {afterLogin} from './authGuard'
export const SignRoutes = {
  path: '/sign',
  name: 'Sing',
  component: Sign,
  beforeEnter: afterLogin
}
export const SignInRoutes = {
  path: '/signIn',
  name: 'SignIn',
  component: SignIn,
  beforeEnter: afterLogin
}
export const SignUpRoutes = {
  path: '/signUp',
  name: 'SignUp',
  component: SignUp,
  beforeEnter: afterLogin
}
export const SignUpSuccRoutes = {
  path: '/signUpSuccess',
  name: 'SignUpSuccess',
  component: SignUpSuccess,
  beforeEnter: afterLogin
}
