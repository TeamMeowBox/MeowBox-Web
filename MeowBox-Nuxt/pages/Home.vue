<template>
  <v-container grid-list-md text-xs-center>
    <main-info></main-info>
    <live-reacts></live-reacts>
    <what-is-meowbox></what-is-meowbox>
    <this-month-info></this-month-info>
    <footer-start></footer-start>
  </v-container>
</template>

<script>
import LiveReacts from '../components/Home/LiveReact'
import MainInfo from '../components/Home/MainInfo'
import WhatIsMeowbox from '../components/Home/WhatIsMeowbox'
import ThisMonthInfo from '../components/Home/ThisMonthInfo'
import FooterStart from '../components/Home/FooterStart'

export default {
  name: 'Home',
  components: {
    LiveReacts,
    MainInfo,
    WhatIsMeowbox,
    ThisMonthInfo,
    FooterStart
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/Home.scss';
</style>
