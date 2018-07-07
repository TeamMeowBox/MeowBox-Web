<template>
  <v-container>
    <my-info></my-info>
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
import {mapActions} from 'vuex';
import VerticalToolbar from '../components/MyPage/VerticalToolbar'
import MyInfo from '../components/MyPage/MyInfo'

export default {
  name: 'Mypage',
  components: {
    VerticalToolbar,
    MyInfo
  },
  methods: {
    ...mapActions([
      'fetchUserProfile'
    ])
  },
  async created() {
    // await this.$store.dispatch('fetchUserProfile', localStorage.getItem('user_idx'));
    await this.fetchUserProfile(localStorage.getItem('user_idx'));
  }
}
</script>

<style lang="scss">

</style>
