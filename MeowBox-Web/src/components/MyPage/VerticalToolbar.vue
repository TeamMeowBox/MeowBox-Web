<template>
    <v-layout row>
        <v-flex xs12 sm6>
            <v-card class="toolbar-items">
                <v-list>
                <template v-for="item in mypageToolbarItems">
                    <v-list-tile :key="item.title">
                        <v-btn class="toobar-item" flat :key="item.title" router :to="item.link">{{ item.title }}</v-btn>
                    </v-list-tile>
                </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name:'VerticalToolbar',
    data() {
        return {
            mypageToolbarItems: [
                {title: '개인정보 수정', link: '/mypage/updateUser'},
                {title: '고양이정보 수정', link: '/mypage/updateCat'},
                {title: '주문내역', link: '/mypage/orderList'},
                {title: '미유박스에 제안', link: '/mypage/suggest'},
                {title: '설정', link: '/mypage/setting'},
                {title: '탈퇴하기', link: '/mypage/drouout'}
            ]
        }
    }
}
</script>

<style>
    @import '../../assets/scss/VerticalToolbar.scss';
</style>
