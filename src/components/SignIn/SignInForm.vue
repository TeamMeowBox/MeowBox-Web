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
            <v-text-field class="email" type="email" style="width:10vw" v-model="info.email"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:5rem; text-align:left">
            <label for="password" style="color:#4c4e51">비밀번호</label>
          </td>
          <td>
            <v-text-field class="password" type="password" style="width:10vw" v-model="info.pwd"></v-text-field>
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
import axios from 'axios'
export default {
  name: 'SignInForm',
  data(){
    return {
      info:{
        email:'',
        pwd:''
      }
    }
  },
  methods: {
    clickLogin () {
        axios.post('http://13.209.220.1:3000/user/signin',this.info)
            .then(response => {
              console.log(response.data);
                if(response.data.result.status == 'true'){
                    localStorage.token = response.data.result.token
                    this.$router.push("/");
                  }else{
                    alert("아이디,비밀번호를 확인해주세요")
                  }
                })
             .catch(e => {
              console.log(e);
              alert("아이디,비밀번호를 확인해주세요")
                  
            })
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
