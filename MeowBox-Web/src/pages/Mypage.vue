<template>
    <v-container>
        <v-layout class="container" style="width:70vw">
            <table style="width:100%">
                <tr>
                    <td style="padding-right:2rem">
                        <img src="https://cattoyshq.com/wp-content/uploads/2017/08/cat-playing-with-toy.jpg" alt="" height="100" width="100" style="border-radius:50px">
                    </td>
                    <td style="padding-right:2rem">
                        안녕하세요<br>
                        온풍이 집사 <b>황윤선</b>님!
                    </td>
                    <td style="padding-right:2rem">
                        <small>정기권 > </small><br>
                        <p>3박스 중 2박스를 받았어요</p>
                        <p>여기에 프로그레스바 넣을거임</p>
                    </td>
                    <td style="padding-right:2rem">
                        <small>내 개인정보 > </small><br>
                        <p>사용자 이메일 보여주는 곳</p>
                        <p>고양이이름/무게/생일</p>
                    </td>
                </tr>
            </table>
        </v-layout>
        <v-layout class="container" style="width:70vw;">
            <section xs12 sm6>
                <vertical-toolbar></vertical-toolbar>
            </section>
            <section xs12 sm6 offset-sm3 style="margin-left:4vw">
                <router-view></router-view>
            </section>
        </v-layout>
    </v-container>
</template>

<script>
import VerticalToolbar from '../components/MyPage/VerticalToolbar'
export default {
    name: 'Mypage',
    components: {
        VerticalToolbar
    }

}
</script>

<style lang="scss">

</style>
