import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import { SignRoutes, SignInRoutes, SignUpRoutes } from './sign'
import StoryRoutes from './story'
import ReviewRoutes from './review'
import OrderRoutes from './Order'
import MypageRoutes from './mypage'
import FaqRoutes from './faq'
Vue.use(Router)

export default new Router({
  routes: [ HomeRoutes, SignInRoutes, SignUpRoutes, SignRoutes, StoryRoutes, ReviewRoutes, OrderRoutes, MypageRoutes, FaqRoutes],
  mode: 'history'

})
