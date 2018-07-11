<template>
  <v-layout class="container myinfo-container">
    <table xs12 sm6 md4 lg3>
      <tr>
        <td class="profile-img">
          <img :src="userProfile.imageProfile" alt="" height="100" width="100" style="border-radius:50px">
        </td>
        <td class="profile-detail">
          안녕하세요<br>
          {{userProfile.catName}} 집사 <b>{{userProfile.userName}}</b>님!
        </td>
        <td class="progress-bar">
          <small>정기권 ></small>
          <br>
          <template v-if="item.flag === '1'">
            <p>{{item.ticket}}박스 중 {{item.use}}박스를 받았어요</p>
            <v-progress-linear
              height="10"
              :value="item.percent"
              background-color="grey"
              color="pink"
            ></v-progress-linear>
          </template>

          <template v-else>
            <p>나의 고양이에게 </p>
            <p>미유박스를</p>
            <p>선물 보는거 어때요?</p>
          </template>

        </td>
        <td class="personal-info">
          <small>내 개인정보 ></small>
          <br>
          <span class="star"><i class="fas fa-envelope"></i> {{userProfile.email}}</span><br>
          <span class="star"><i class="far fa-grin-squint"></i> {{userProfile.catName}} / {{userProfile.size}} / {{userProfile.birthday}}</span>
        </td>
      </tr>
    </table>
  </v-layout>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'MyInfo',
    data() {
      return {
        item: ''
      };
    },
    computed: {
      ...mapGetters([
        'userProfile',
        'usedTicket'
      ])
    },
    methods: {
      ...mapActions([
        'fetchMyPageInfoAction'
      ]),
      async getMyPage() {
        const result = await this.fetchMyPageInfoAction();
        console.log('result', result);
        this.item = result;

      }
    },
    async created() {
      await this.getMyPage();
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/MyInfo.scss';
</style>
