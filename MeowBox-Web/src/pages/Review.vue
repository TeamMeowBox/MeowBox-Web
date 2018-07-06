<template>
  <v-container grid-list-md text-xs-center>
    <p>2018년</p>
    <p>미유 박스와 함께한 아이들</p>
    <best-items></best-items>
  </v-container>
</template>

<script>
import BestItems from '../components/Review/BestItems'

export default {
  name: 'Review',
  components: {
    BestItems
  }
}
</script>

<style>

</style>
