<template>
    <v-layout class="container" style="width:70vw">
            <table style="width:100%; border-top:1px solid #efefef; border-bottom:1px solid #efefef; padding:1rem 0 1rem 0;">
                <tr>
                    <td style="padding-left:3rem;">
                        <img src="https://cattoyshq.com/wp-content/uploads/2017/08/cat-playing-with-toy.jpg" alt="" height="100" width="100" style="border-radius:50px">
                    </td>
                    <td style="padding-right:2rem;border-right:1px solid #efefef;width:12vw">
                        안녕하세요<br>
                        온풍이 집사 <b>{{userProfile.userName}}</b>님!
                    </td>
                    <td style="padding-right:2rem; border-right:1px solid #efefef; text-align:center;">
                        <small>정기권 > </small><br>
                        <p>3박스 중 2박스를 받았어요</p>
                        <p>여기에 프로그레스바 넣을거임</p>
                    </td>
                    <td style="padding-right:2rem; text-align:center;">
                        <small>내 개인정보 > </small><br>
                        <p>{{userProfile.email}}</p>
                        <p>{{userProfile.catName}}/{{userProfile.size}}/</p>
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

<style>

</style>
