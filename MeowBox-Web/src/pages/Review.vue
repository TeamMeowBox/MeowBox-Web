<template>
  <v-container grid-list-md text-xs-center style="width:70vw;">
    <section class="review-title" style="text-align:left;">
      <h1>미유박스와<br>2018년을 함께 보낸 아이들</h1>
      <hr style="width:20vw;">
    </section>
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
