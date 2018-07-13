<template>
  <v-layout row wrap>
    <v-flex>
      <section class="this-month-birth" >
        <table>
          <tr>
            <td class="title" colspan="3">
              <h2>이달의 소중한 탄생</h2>
              <p>{{items.comment.birthday}}</p>
            </td>
          </tr>
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
          <tr>
            <td class="title" colspan="3">
              <h2>{{items.title.best_image_7}}</h2>
              <p>{{items.comment.best_image_7}}</p>
            </td>
          </tr>
          <tr>
            <td class="review" v-for="(item, index) in items.birthday" :key="index" >
              <img :src="item.image">
              <p>#{{item.hash}}</p>
              <p>@{{item.insta}}</p>
            </td>
          </tr>
        </table>
      </section>
      <section class="june-box" >
        <table>
          <tr>
            <td class="title" colspan="3">
              <h2>{{items.title.best_image_6}}</h2>
              <p>{{items.comment.best_image_6}}</p>
            </td>
          </tr>
          <tr>
            <td class="review" v-for="(item, index) in items.birthday" :key="index" >
              <img :src="item.image">
              <p>#{{item.hash}}</p>
              <p>@{{item.insta}}</p>
            </td>
          </tr>
        </table>
      </section>

      <!--<section v-for="(item, index) in items" :key="index">-->
        <!--<p>{{item.month}}월의 베스트</p>-->
        <!--<p>{{item.description}}</p>-->
        <!--<article v-for="(image, idx) in item.images" :key="idx" style="display: inline-block">-->
          <!--<img :src="image.url" alt="" height="300" width="300">-->
          <!--<p>{{image.instaNick}}</p>-->
          <!--<p>{{image.instaId}}</p>-->
        <!--</article>-->
      <!--</section>-->

      <section>
        <p>베스트 컷을 기대해주세요!</p>
        <v-btn class="meow_btn">맨위로 가기</v-btn>
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
<style>
</style>
