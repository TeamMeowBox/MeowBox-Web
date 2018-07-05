<template>
    <v-layout row>
        <v-flex xs12 sm6>
            <v-card style="width:15vw;">
                <v-list dark>
                <template v-for="item in mypageToolbarItems">
                    <v-list-tile :key="item.title">
                        <v-btn flat :key="item.title" router :to="item.link" style="width:12vw;padding-right:4rem;">{{ item.title }}</v-btn>
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
                {title: '개인정보 수정', link: '/mypage/update'},
                {title: '주문내역', link: '/mypage/orderList'},
                {title: '미유박스에 제안', link: '/mypage/suggest'},
                {title: '설정', link: '/mypage/setting'}
            ]
        }
    }
}
</script>

<style>
</style>
