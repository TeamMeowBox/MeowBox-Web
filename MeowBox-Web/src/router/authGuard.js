import {store} from '../store/index'

export const authGuard = (to, from, next) => {
  if (store.getters.token) {
    next()
  } else {
    alert('로그인 해주세요!')
    next('/signIn')
  }
}

export const afterLogin = (to, from, next) => {
  if (store.getters.token) {
    alert('이미 로그인 되어있습니다.')
    next('/')
  } else {
    next()
  }
}
