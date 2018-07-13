<template>
    <div class="insta-info">
      <table>
        <tr>
            <td class="cat-info" colspan="4" >
                <span><b>{{catCount}}</b> 마리의 고양이가</span><br>
                <span>상자 안에 들어왔어요</span>
            </td>
        </tr>
        <tr >
        <td class="insta-card" v-for="(item, index) in items" :key="index" >
          <v-card >
            <v-card-title primary-title>
              <div >
                <div class="insta-head">
                  <img :src="item.profile" alt="" height="50" width="50" style="border-radius:25zpx">
                  <span >{{item.nickname}}</span>
                  <!-- {{item.profile}} -->
                </div>
              </div>
            </v-card-title>

            <v-card-media
              :src="item.picture"
              height="40vh"
              style="background-size:contain;"
            ></v-card-media>
          </v-card>
        </td>
      </tr>
      <tr>
          <td class="insta-footer" colspan="4" >
              <v-btn class="meow_start" router to="/review">미유박스 후기보기</v-btn>
          </td>
      </tr>
      </table>
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'InstaInfo',
  data() {
    return {
      items: null,
      catCount: null
    };
  },
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    ...mapActions([
      'fetchInstaAction',
      'fetchCatCountAction'
    ]),
    async getInsta() {
      const result = await this.fetchInstaAction();
      this.items = result;
    },
    async getCatCount() {
      this.catCount = await this.fetchCatCountAction();

    }
  },
  created() {
    this.getInsta();
    this.getCatCount();
  }
}
</script>

<style>

</style>
