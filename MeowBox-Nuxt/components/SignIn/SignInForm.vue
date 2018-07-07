<template>
  <v-container style="width:70vw">
    <section>
      <b class="login-title">로그인</b>
    </section>
    <br>
    <hr class="signIn-hr">
    <br>
    <br>
    <section style="text-align:center">
      <table style="margin:0 auto">
        <tr>
          <td style="width:5rem; text-align:left">
            <label for="email">이메일</label>
          </td>
          <td>
            <v-text-field class="email" type="email" style="width:10vw" v-model="info.email"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:5rem; text-align:left">
            <label for="password">비밀번호</label>
          </td>
          <td>
            <v-text-field class="password" type="password" style="width:10vw" v-model="info.pwd"></v-text-field>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <v-btn class="signInBtn" @click="clickLogin" style="">로그인</v-btn>
          </td>
        </tr>
        <tr>
          <td class="more-signUp" colspan="2">
            <small>아직 아이디가 없으신가요?</small>&nbsp;<b><a class="signUpLink" href="/signUp">회원가입</a></b>
          </td>
        </tr>
      </table>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'SignInForm',
  data() {
    return {
      info: {
        email: '',
        pwd: ''
      }
    }
  },
  methods: {
    // clickLogin () {
    //   axios.post('http://13.209.220.1:3000/user/signin', this.info)
    //     .then(response => {
    //       if (response.data.status === true) {
    //         localStorage.token = response.data.result.token
    //         localStorage.user_idx = response.data.result.user_idx
    //         this.$router.back();
    //       } else {
    //         alert('아이디,비밀번호를 확인해주세요')
    //       }
    //     })
    //     .catch(e => {
    //       console.log(e);
    //       alert('아이디,비밀번호를 확인해주세요')
    //     })
    // }
    async clickLogin() {
      const result = await this.$store.dispatch('loginAction', this.info);

      return result ? this.$router.back() : alert('check id or pw');

    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/scss/SignIn.scss';
</style>
