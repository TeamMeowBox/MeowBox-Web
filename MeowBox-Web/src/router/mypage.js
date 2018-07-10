import Mypage from '@/pages/Mypage'
import {authGuard} from './authGuard'
import MyInfoUpdate from '@/components/MyPage/MyInfoUpdate'
import MyOrderList from '@/components/MyPage/MyOrderList'
import MySuggestion from '@/components/MyPage/MySuggestion'
import MySetting from '@/components/MyPage/MySetting'
import MyCatInfoUpdate from '@/components/MyPage/MyCatUpdate'
import MyPwdUpdate from '@/components/MyPage/MyPwdUpdate'
export default {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage,
    children: [
        {
            path: 'updateUser',
            component: MyInfoUpdate
        },
        {
            path: 'updatePwd',
            component: MyPwdUpdate
        },
        {
            path: 'updateCat',
            component: MyCatInfoUpdate
        },
        {
            path: 'orderList',
            component: MyOrderList
        }, {
            path: 'suggest',
            component: MySuggestion
        }, {
            path: 'setting',
            component: MySetting
        }
    ],
  beforeEnter: authGuard

}
// export const MyInfoUpdateRoutes = {
//     path: '/mypage/update',
//     name: 'MyInfoUpdate',
//     component: MyInfoUpdate
//   }
