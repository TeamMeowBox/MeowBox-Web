<template>
  <v-container grid-list-md text-xs-center>
    <main-info></main-info>
    <!-- <live-reacts></live-reacts> -->
    <box-info></box-info>
    <!-- <what-is-meowbox></what-is-meowbox>
    <this-month-info></this-month-info> -->
    <count-cat></count-cat>
    <!-- <footer-start></footer-start> -->
  </v-container>
</template>

<script>
import LiveReacts from '../components/Home/LiveReact'
import MainInfo from '../components/Home/MainInfo'
import WhatIsMeowbox from '../components/Home/WhatIsMeowbox'
import ThisMonthInfo from '../components/Home/ThisMonthInfo'
import BoxInfo from '../components/Home/BoxInfo'
import FooterStart from '../components/Home/FooterStart'
import CountCat from '../components/Home/CountCat';

export default {
  name: 'Home',
  components: {
    LiveReacts,
    MainInfo,
    BoxInfo,
    WhatIsMeowbox,
    ThisMonthInfo,
    CountCat,
    FooterStart
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/Home.scss';
</style>
