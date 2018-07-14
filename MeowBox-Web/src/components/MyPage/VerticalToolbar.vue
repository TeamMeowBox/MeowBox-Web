<template>
  <v-layout xs12 sm6 md4 lg3 row>
    <v-flex>
      <v-card class="toolbar-items">
        <v-list>
          <template v-for="item in mypageToolbarItems">
            <v-list-tile :key="item.title" router :to="item.link">
              <v-list-tile-title class="toobar-item">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'VerticalToolbar',
    data() {
      return {
        mypageToolbarItems: [
          {title: '개인정보 수정', link: '/mypage/updateUser'},
          {title: '비밀번호 수정', link: '/mypage/updatePwd'},
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
