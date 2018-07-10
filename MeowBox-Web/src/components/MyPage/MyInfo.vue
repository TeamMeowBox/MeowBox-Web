<template>
    <v-layout class="container myinfo-container" >
            <table >
                <tr>
                    <td class="profile-img">
                        <img :src="userProfile.imageProfile" alt="" height="100" width="100" style="border-radius:50px">
                    </td>
                    <td class="profile-detail" >
                        안녕하세요<br>
                        {{userProfile.catName}} 집사 <b>{{userProfile.userName}}</b>님!
                    </td>
                    <td class="progress-bar" >
                        <small>정기권 > </small><br>
                        <p>3박스 중 2박스를 받았어요</p>
                        <v-progress-linear
                        height="10"
                        value="66"
                        background-color="grey"
                        color="pink"
                        ></v-progress-linear>
                    </td>
                    <td class="personal-info" >
                        <small>내 개인정보 > </small><br>
                        <span class="star">{{userProfile.email}}</span><br>
                        <span class="star">{{userProfile.catName}} / {{userProfile.size}} / {{userProfile.birthday}}</span>
                    </td>
                </tr>
            </table>
        </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'userProfile'
    ])
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/MyInfo.scss'
</style>
