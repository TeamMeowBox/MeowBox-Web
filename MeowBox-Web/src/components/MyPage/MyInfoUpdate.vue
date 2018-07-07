<template>
    <div>
        <h3 class="title">개인정보수정</h3>
        <hr class="section-divide">
        <section class="my-info-container">
            <table style="margin:0 auto; width:100%;">
                <tr>
                <td class="cate-td">
                    <label for="email">이메일</label><br>
                    <small>(아이디)</small>
                </td>
                <td colspan="2" >
                    <v-text-field class="email-id" type="text" v-model="email" /> @ <v-text-field class="email-domain" type="text"  />
                </td>
                </tr>
                <tr>
                <td class="cate-td">
                    <label for="password">비밀번호</label>
                </td>
                <td>
                    <v-text-field class="password" type="password"></v-text-field>
                </td>
                <td>
                    <small class="more-info">10~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용할 수 있습니다</small>
                </td>
                </tr>
                <tr>
                <td class="cate-td">
                    <label for="passwordConfirm">비밀번호 확인</label>
                </td>
                <td>
                    <v-text-field class="passwordConfirm" type="password"></v-text-field>
                </td>
                <td style="width:40vw;">
                    <small class="more-info">비밀번호를 다시 한 번 입력주세요</small>
                </td>
                </tr>
                <tr>
                <td class="cate-td">
                    <label for="name">이름</label>
                </td>
                <td>
                    <v-text-field class="name" v-model="name" ></v-text-field>
                </td>
                <td>
                    <small class="more-info">영문 소문자/영문 소문자 + 숫자, 4-16자</small>
                </td>
                </tr>
                <tr>
                <td class="cate-td">
                    <label for="phone">휴대전화</label>
                </td>
                <td colspan="2">
                    <v-text-field class="phone1" type="text" v-model="phone"/> - <v-text-field class="phone2" type="text" /> - <v-text-field class="phone3" type="text" />
                </td>
                </tr>
            </table>
            <aside class="btn-space">
                <v-btn class="updateBtn">수정하기</v-btn>
            </aside>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'MyInfoUpdate',
  data() {
    return {
      email: '',
      name: '',
      phone: ''
    };
  },
  computed: {
    ...mapGetters([
      'userProfile'
    ])
  },
  methods: {
    init() {
      this.email = this.userProfile.email;
      this.name = this.userProfile.userName;
      this.phone = this.userProfile.phoneNumber;
    }
  },
  created() {
    this.init();
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/MyInfoUpdate.scss';
</style>
