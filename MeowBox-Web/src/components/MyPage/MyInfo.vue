<template>
  <v-layout class="container myinfo-container">
    <table xs12 sm6 md4 lg3>
      <tr>
        <td class="profile-img">
          <img :src="userProfile.image_profile" alt="" height="100" width="100" style="border-radius:50px">
        </td>
        <td class="profile-detail">
          안녕하세요<br>
          {{myPageInfo.cat_name}} 집사 <b>{{myPageInfo.user_name}}</b>님!
        </td>
        <td class="progress-bar">
          <small>정기권 ></small>
          <br>
          <template v-if="myPageInfo.flag === '1'">
            <p>{{myPageInfo.ticket}} 중 {{myPageInfo.use}}를 받았어요</p>
            <v-progress-linear
              height="10"
              :value="myPageInfo.percent"
              background-color="grey"
              color="pink">
            </v-progress-linear>
          </template>

          <template v-else>
            <img :src="myPageInfo.sendImage" alt="" style="width:14vw;">
          </template>

        </td>

        <td class="personal-info">
          <small>내 개인정보 ></small>
          <br>
          <span class="star"><i class="fas fa-envelope"></i> {{myPageInfo.email}}</span><br>
          <span class="star"><i class="far fa-grin-squint"></i> {{myPageInfo.cat_info}}</span>


          <!--<span class="star"><i class="fas fa-envelope"></i> {{userProfile.email}}</span><br>-->
          <!--<span class="star"><i class="far fa-grin-squint"></i> {{userProfile.cat_name}} / -->
          <!--<span class="star" v-if="userProfile.size === 0">조금 마름</span>-->
          <!--<span class="star" v-if="userProfile.size === 1">보통</span>-->
          <!--<span class="star" v-if="userProfile.size === 2">과체중</span>-->
           <!--/ {{userProfile.birthday}}</span>-->
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
      'usedTicket',
      'myPageInfo'
    ])
  },
  methods: {
    ...mapActions([
      'fetchMyPageInfoAction'
    ])
  },
  async created() {
    // await this.fetchMyPageInfoAction();
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/MyInfo.scss';
</style>
