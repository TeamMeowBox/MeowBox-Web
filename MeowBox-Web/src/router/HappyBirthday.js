import HappyBirthday from '@/pages/HappyBirthday'
import BirthdayDetail from '@/components/Birthday/BirthdayDetail'
export default{
  path: '/happyBirthday',
  name: 'HappyBirthday',
  component: HappyBirthday,
  children: [
    {
      path: 'detail',
      component: BirthdayDetail
    }
  ]
}
