<template>
  <v-container>
    <my-info></my-info>
    <v-layout class="container" style="width:70vw;">
      <section xs12 sm6 md4 lg3>
        <vertical-toolbar></vertical-toolbar>
      </section>
      <section xs12 sm6 md4 lg3 offset-sm3 style="margin-left:4vw">
        <router-view></router-view>
      </section>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VerticalToolbar from '../components/MyPage/VerticalToolbar'
import MyInfo from '../components/MyPage/MyInfo'

export default {
  name: 'Mypage',
  components: {
    VerticalToolbar,
    MyInfo
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
      'fetchUserProfile',
      'fetchMyPageInfoAction'
    ]),
    getMyPage() {
      this.fetchMyPageInfoAction();
    }
  },
  async created() {
    // await this.$store.dispatch('fetchUserProfile', localStorage.getItem('user_idx'));
    await this.fetchUserProfile();
    await this.getMyPage();
  }
}
</script>

<style lang="scss">

</style>
