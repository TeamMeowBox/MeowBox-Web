<template>
  <v-container style="width:70vw">
    <section>
      <b class="signUpTitle">회원가입</b>
    </section>
    <br>
    <p>기본 정보 <small class="star">필수항목(*)은 꼭 입력해주세요</small></p>
    <hr class="section-divide" >
    <section style="text-align:center">
      <table class="signUpTable" >
        <tr>
          <td class="label" >
            <label for="email" >이메일<span class="star">*</span></label><br>
            <small>(아이디)</small>
          </td>
          <td colspan="2">
            <v-text-field class="email" type="email" v-model="info.email" :rules="emailRules" required></v-text-field>
          </td>
        </tr>
        <tr>
          <td class="label">
            <label for="password" >비밀번호</label>
          </td>
          <td>
            <v-text-field class="password" type="password" v-model="info.pwd"></v-text-field>
          </td>
          <td>
            <small >10~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용할 수 있습니다</small>
          </td>
        </tr>
        <tr>
          <td class="label">
            <label for="passwordConfirm" >비밀번호 확인</label>
          </td>
          <td>
            <v-text-field class="passwordConfirm" type="password"></v-text-field>
          </td>
          <td>
            <small >비밀번호를 다시 한 번 입력주세요</small>
          </td>
        </tr>
        <tr>
          <td class="label">
            <label for="name" >이름<span class="star">*</span></label>
          </td>
          <td>
            <v-text-field class="name" :rules="nameRules" v-model="info.name"></v-text-field>
          </td>
          <td >
            <small>영문 소문자/영문 소문자 + 숫자, 4-16자</small>
          </td>
        </tr>
        <tr>
          <td class="label">
            <label for="phone" >휴대전화<span class="star">*</span></label>
          </td>
          <td colspan="2" >
            <v-text-field class="name" type="number" v-model="info.phone_number"></v-text-field>
          </td>
        </tr>
      </table>
      <aside class="signUpBtnSpace">
        <v-btn class="signUpBtn" @click="clickSignUp">가입하기</v-btn>
      </aside>
    </section>
  </v-container>
</template>

<script>

import {SET_DEFAULT_CAT} from '../../store/constants/constants';
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
      },
      valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 16) || 'Name must be less than 16 characters'
      ]
    }
  },
  methods: {
   async clickSignUp () {
     
      const result = await this.$store.dispatch('signUpAction', this.info);
      this.$store.commit(SET_DEFAULT_CAT)
      return result ? this.$router.push('/') : alert('check id or pw');
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/SignUp.scss';
</style>