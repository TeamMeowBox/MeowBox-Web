<template>
    <div>
        <h3 class="title">비밀번호 변경</h3>
        <hr class="section-divide">
        <section class="my-info-container">
            <table style="margin:0 auto; width:100%;">
                <tr>
                    <td class="cate-td">
                        <label for="password">비밀번호</label>
                    </td>
                    <td>
                        <v-text-field class="password" type="password" v-model="pwd"></v-text-field>
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
            </table>
            <aside class="btn-space">
                <v-btn class="updateBtn" @click="editPwd">수정하기</v-btn>
            </aside>
        </section>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'MyPwdUpdate',
  data() {
    return {
      pwd: '',
    };
  },
  methods: {
    ...mapActions([
      'editUserProfile'
    ]),
    editPwd() {
      const result = this.editUserProfile(this.pwd);

      console.log(result);
      return result ? alert('goood') : alert('baad')
    }
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/MyInfoUpdate.scss';
</style>
