<template>
  <v-layout row wrap>
    <v-flex>
      <section class="this-month-birth" >
        <table>
          <tr class="title-tr">
            <td class="title" colspan="3">
              <h2>이달의 소중한 탄생</h2>
              <p>{{items.comment.birthday}}</p>
            </td>
          </tr>
          <br>
          <tr>
            <td class="review" v-for="(item, index) in items.birthday" :key="index">
              <img :src="item.image">
              <p>#{{item.hash}}</p>
              <p>@{{item.insta}}</p>
            </td>
          </tr>
        </table>
      </section>
      <section class="july-box" >
        <table>
          <tr class="title-tr">
            <td class="title" colspan="3">
              <h2>{{items.title.best_image_7}}</h2>
              <p>{{items.comment.best_image_7}}</p>
            </td>
          </tr>
          <br>
          <tr >
            <td class="review" v-for="(item, index) in items.best_image_7" :key="index" >
              <img :src="item.image">
              <p>#{{item.hash}}</p>
              <p>@{{item.insta}}</p>
            </td>
          </tr>
        </table>
      </section>
      <section class="june-box" >
        <table>
          <tr class="title-tr">
            <td class="title" colspan="3">
              <h2>{{items.title.best_image_6}}</h2>
              <p>{{items.comment.best_image_6}}</p>
            </td>
          </tr>
          <br>
          <tr>
            <td class="review" v-for="(item, index) in items.best_image_6" :key="index" >
              <img :src="item.image">
              <p>#{{item.hash}}</p>
              <p>@{{item.insta}}</p>
            </td>
          </tr>
        </table>
      </section>

      <br><br><br>
      <section>
        <p class="foot-msg">베스트 컷을 기대해주세요!</p>
        <v-btn class="meow_btn" href="#" title=Top >맨위로 가기</v-btn>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';

export default {
  name: 'BestItems',
  data () {
    return {
      items: null

    }
  },
  methods: {
    ...mapActions([
      'fetchReviewAction'
    ]),
    async getReview() {
      const result = await this.fetchReviewAction();
      console.log('result', result);
      this.items = result;
    }
  },
  created() {
    this.getReview();
  }
}
</script>
<style lang="scss">
.this-month-birth {
  .title-tr {
    background: url('../../assets/images/review/review_yellow_background.png') no-repeat;
    width:100%;
    height:20vh;
    td {
      padding-left:1rem;
    }
  }

}
.july-box {
  .title-tr {
    background-color:rgb(249,242,242);
    height:20vh;
    td{
      padding-left:1rem;
    }
  }
}
.june-box {
  .title-tr {
    background-color:rgb(249,242,242);
    height:20vh;
    td{
      padding-left:1rem;
    }
  }
}

</style>
