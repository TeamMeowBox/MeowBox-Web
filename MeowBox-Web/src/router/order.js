import Order from '@/pages/Order'
import {authGuard} from './authGuard'

export default{
  path: '/order',
  name: 'Order',
  component: Order,
  beforeEnter: authGuard
}
