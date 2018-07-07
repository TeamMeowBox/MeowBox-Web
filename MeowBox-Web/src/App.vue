<template>
 <v-app style="background-color:#fff">
   <button class="a"></button>
    <v-toolbar style="box-shadow:none; background-color:#ffffff;height:7vh;padding-right:15vw;">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
         <v-btn flat router:to='signIn' v-if="getToken===false" class="login_btn toolbar-item">
         로그인/회원가입 
        </v-btn>
        <v-btn class="toolbar-item" flat v-for="item in userToolbarItems" :key="item.title" router :to="item.link" v-if="item.flag===true || item.flag ===undefined">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <hr style="border:1px solid #f4f4f4;">
    <v-toolbar style="box-shadow:none; background-color:#ffffff; padding-left:15vw; padding-right:15vw; margin-top:2rem;">
      <v-toolbar-title><a href="/"><img src="./assets/images/meowbox_logo.png" alt=""/></a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn class="toolbar-item" flat v-for="item in toolbarItems" :key="item.title" router :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
    <footer-page></footer-page>
  </v-app>
</template>

<script>
import footerPage from './components/Home/Footer'
export default {
  name: 'App',
  data () {
    return {
      toolbarItems: [
        {title: '미유박스이야기', link: '/story'},
        {title: '생일축하해! 박스', link: '/birthbox'},
        {title: '주문하기', link: '/order'},
        {title: '집사들의 후기', link: '/review'}
      ],
      userToolbarItems: [
        {title: '로그인/회원가입', link:'/signIn', isLogin:false},
        {title: '마이페이지', link:'/mypage/update', isLogin:true},
        {title: '자주 묻는 질문', link:'/faq'}
      ]
    }
  },
  components : {
    footerPage
  },
  computed : {
    getToken : function(){
      return location.location;
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/Header.scss'
</style>
