import Mypage from '@/pages/Mypage'
import MyInfoUpdate from '@/components/MyPage/MyInfoUpdate'
import MyOrderList from '@/components/MyPage/MyOrderList'
import MySuggestion from '@/components/MyPage/MySuggestion'
import MySetting from '@/components/MyPage/MySetting'
export default {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage,
    children: [
        {
            path: 'update',
            component: MyInfoUpdate
        }, {
            path: 'orderList',
            component: MyOrderList
        }, {
            path: 'suggest',
            component: MySuggestion
        }, {
            path: 'setting',
            component: MySetting
        }
    ]
}
// export const MyInfoUpdateRoutes = {
//     path: '/mypage/update',
//     name: 'MyInfoUpdate',
//     component: MyInfoUpdate
//   }
  