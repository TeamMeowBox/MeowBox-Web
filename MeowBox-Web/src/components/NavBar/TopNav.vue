<template>
  <v-toolbar hidden-md-only style="box-shadow:none; background-color:#ffffff;height:7vh;padding-right:15vw;">
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn v-if="!isLogin" flat class="login_btn" @click="clickSignIn">
        로그인
      </v-btn>
      <v-btn v-if="isLogin" flat class="login_btn" @click="clickLogOut">
        로그아웃
      </v-btn>
      <v-btn v-if="isLogin" flat router to="/mypage/updateUser">
        마이페이지
      </v-btn>
      <v-btn flat router to="/faq">
        자주묻는질문
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {REMOVE_TOKEN} from '../../store/constants/constants';

export default {
  name: 'TopNav',
  props: ['loginData'],
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
      localStorage.removeItem('cat_idx');
      this.$store.commit(REMOVE_TOKEN);
      alert("로그아웃")
      this.$router.replace('/');
    }
  }
}
</script>
