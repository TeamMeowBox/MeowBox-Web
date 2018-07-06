<template>
  <v-container style="width:70vw">
    <section>
      <b style="font-size:2rem; color:#4c4e51">회원가입</b>
    </section>
    <br>
    <p>기본 정보 <small>필수항목(*)은 꼭 입력해주세요</small></p>
    <hr style="border-top:4px solid #e68789;">
    <section style="text-align:center">
      <table style="margin:0 auto; width:100%;">
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="name" style="color:#4c4e51">이름*</label>
          </td>
          <td>
            <v-text-field class="name" style="width:14vw" v-model="info.name"></v-text-field>
          </td>
          <td>
            <small style="float:left">영문 소문자/영문 소문자 + 숫자, 4-16자</small>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="phone" style="color:#4c4e51">휴대전화*</label>
          </td>
          <td colspan="2">
            <v-text-field class="phone" type="number" style="width:14vw" v-model="info.phone_number"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="email" style="color:#4c4e51">이메일*</label><br>
            <small>(아이디)</small>
          </td>
          <td colspan="2">
            <v-text-field class="email" type="email" style="width:14vw" v-model="info.email"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="password" style="color:#4c4e51">비밀번호</label>
          </td>
          <td>
            <v-text-field class="password" type="password" style="width:14vw" v-model="info.pwd"></v-text-field>
          </td>
          <td>
            <small style="float:left">10~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용할 수 있습니다</small>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="passwordConfirm" style="color:#4c4e51">비밀번호 확인</label>
          </td>
          <td>
            <v-text-field class="passwordConfirm" type="password" style="width:14vw; vertical-align:middle"></v-text-field>
          </td>
          <td style="width:40vw;">
            <small style="float:left">비밀번호를 다시 한 번 입력주세요</small>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="name" style="color:#4c4e51">이름*</label>
          </td>
          <td>
            <v-text-field class="name" style="width:14vw"></v-text-field>
          </td>
          <td>
            <small style="float:left">영문 소문자/영문 소문자 + 숫자, 4-16자</small>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="phone" style="color:#4c4e51">휴대전화*</label>
          </td>
          <td colspan="2">
            <v-text-field class="phone" type="number" style="width:14vw"></v-text-field>
          </td>
        </tr>
      </table>
      <aside>
        <v-btn @click="clickSignUp" style="width:20vw; background:#e68789; color:white">가입하기</v-btn>
      </aside>
    </section>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUpForm',
  data(){
    return{
      info:{
      email:'',
      pwd:'',
      phone_number:'',
      name:''
      }
    }
  },
  methods: {
    clickSignUp () {
          axios.post('http://13.209.220.1:3000/user/signup',this.info)
            .then(response => {
              console.log(response.data);
                  if(response.data.status === true){
                    localStorage.token = response.data.result.token
                    localStorage.user_idx = response.data.result.user_idx
                    this.$router.push("/");
                  }else{
                    alert("아이디,비밀번호를 확인해주세요")
                  }
                 })
             .catch(e => {
              console.log(e);    
            })
    }
  }
}
</script>

<style>
  td {
    border-bottom:1px solid #efeded !important;
  }
    .primary--text input, .primary--text textarea {
    caret-color: #e68789 !important;
  }
  .primary--text {
    color:#e68789 !important;
  }

</style>