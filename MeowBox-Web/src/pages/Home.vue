<template>
  <v-container style="width:70vw">
    <main-info></main-info>
    <box-info></box-info>
    <event-info></event-info>
    <detail-info></detail-info>
    <food-info></food-info>
    <!--<count-cat></count-cat>-->
    <insta-info></insta-info>

  </v-container>
</template>

<script>

import CountCat from '../components/Home/CountCat';
import MainInfo from '../components/Home/MainInfo';
import BoxInfo from '../components/Home/BoxInfo';
import EventInfo from '../components/Home/EventInfo';
import DetailInfo from '../components/Home/DetailInfo';
import FoodInfo from '../components/Home/FoodInfo';
import InstaInfo from '../components/Home/InstaInfo';

export default {
  name: 'Home',
  components: {
    MainInfo,
    BoxInfo,
    CountCat,
    // FooterStart,
    EventInfo,
    DetailInfo,
    FoodInfo,
    InstaInfo
  }
}
</script>

<style lang="scss">
@import '../assets/scss/Home.scss';

</style>
