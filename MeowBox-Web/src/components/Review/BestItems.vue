<template>
  <v-layout row wrap>
    <v-flex>

      <section class="this-month-birth" style="text-align:left">
        <h1>이달의 소중한 탄생</h1>
        <p>7월에 태어난 아이들을 함께 축하해줘요! 짝짝짝</p>
          <!--<template v-for="item index in items" :key="item">-->
            <!--<p>{{item}}</p>-->
          <!--</template>-->

        {{items}}
      </section>

      <section class="this-month-best" style="text-align:left">
        <h1>7월의 베스트 컷</h1>
        <p>트로피컬 나이트를 한껏 즐긴 아이들을 소개합니다.</p>
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
