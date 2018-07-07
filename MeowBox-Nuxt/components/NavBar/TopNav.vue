<template>
  <v-toolbar style="box-shadow:none; background-color:#ffffff;height:7vh;padding-right:15vw;">
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn v-if="!isLogin" flat class="login_btn" @click="clickSignIn">
        로그인/회원가입
      </v-btn>
      <v-btn v-if="isLogin" flat class="login_btn" @click="clickLogOut">
        로그아웃
      </v-btn>
      <v-btn flat v-for="item in userToolbarItems" :key="item.title" router :to="item.link">
        {{item.title}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {REMOVE_TOKEN} from '../../store/constants/constants';

export default {
  name: 'TopNav',
  props: ['loginData'],
  data() {
    return {
      userToolbarItems: [
        {title: '마이페이지', link: '/mypage/update'},
        {title: '자주 묻는 질문', link: '/faq'}
      ]
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.token
    }
  },
  methods: {
    clickSignIn() {
      this.$router.push('/signIn');
    },
    clickLogOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user_idx');
      this.$store.commit(REMOVE_TOKEN);
      this.$router.replace('/home');
    }
  }
}
</script>
