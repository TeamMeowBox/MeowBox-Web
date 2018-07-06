<template>
  <v-container style="width:70vw">
    <section>
      <b style="font-size:2rem; color:#4c4e51">로그인</b>
    </section>
    <br>
    <hr style="border-top:4px solid #e68789;">
    <br>
    <br>
    <section style="text-align:center">
      <table style="margin:0 auto">
        <tr>
          <td style="width:5rem; text-align:left">
            <label for="email" style="color:#4c4e51">이메일</label>
          </td>
          <td>
            <v-text-field class="email" type="email" style="width:10vw"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:5rem; text-align:left">
            <label for="password" style="color:#4c4e51">비밀번호</label>
          </td>
          <td>
            <v-text-field class="password" type="password" style="width:10vw"></v-text-field>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <v-btn @click="clickLogin" style="width:100%; background:#e68789; color:white">로그인</v-btn>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <small style="color:#999999">아직 아이디가 없으신가요?</small>&nbsp;<b><a href="/signUp" style="text-decoration:none;color:#e68789">회원가입</a></b>
          </td>
        </tr>
      </table>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'SignInForm',
  methods: {
    clickLogin () {
      alert('click Login Btn')
    }
  }
}
</script>
<style>
  .primary--text input, .primary--text textarea {
    caret-color: #e68789 !important;
  }
  .primary--text {
    color:#e68789 !important;
  }
</style>
