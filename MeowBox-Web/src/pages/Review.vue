<template>
  <v-container grid-list-md text-xs-center style="width:70vw;">
    <section class="review-title">
      <p><b>미유박스와</b><br><b>2018년</b>을 함께 보낸 아이들</p>
      <hr class="review-hr">
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

<style lang="scss">
@import '../assets/scss/Review.scss';
.review-title{
    background: url('../assets/images/review/review_main.png') no-repeat;
    width:100%;
    height:40vh;
    background-size:contain;
    // vertical-align: middle;
}
</style>
