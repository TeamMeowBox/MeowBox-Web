<template>
  <div class="container" style="width:70vw;">
    <div>
      <table style="margin:auto">

      <tr v-for="(item, index) in items" :key="index">
        <td rowspan="2" style="padding:1rem; text-align:left;">
          <v-card style="width:100%">
            <v-card-title primary-title>
              <div >
                <div style="width:20vw; display:table">
                  <img :src="item.profile" alt="" height="50" width="50" style="border-radius:25px">
                  <span style="display:table-cell;vertical-align:middle; font-weight:bold;">{{item.nickname}}</span>
                  <!-- {{item.profile}} -->
                </div>
              </div>
            </v-card-title>

            <v-card-media
              :src="item.picture"
              height="40vh"
              style="background-size:cover;"
            ></v-card-media>
          </v-card>
        </td>
      </tr>

    </table>
    </div>
    <div class="tropical-info">

    </div>
    <div class="insta-info">
      <table>
        <tr >
        <td v-for="(item, index) in items" :key="index" style=" text-align:left;">
          <v-card style="width:100%">
            <v-card-title primary-title>
              <div >
                <div style="width:15vw; display:table">
                  <img :src="item.profile" alt="" height="50" width="50" style="border-radius:25px">
                  <span style="display:table-cell;vertical-align:middle; font-weight:bold;">{{item.nickname}}</span>
                  <!-- {{item.profile}} -->
                </div>
              </div>
            </v-card-title>

            <v-card-media
              :src="item.picture"
              height="40vh"
              style="background-size:cover;"
            ></v-card-media>
          </v-card>
        </td>
      </tr>
      </table>
    </div>
  </div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'BoxInfo',
  data() {
    return {
      items: null
    };
  },
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    ...mapActions([
      'fetchInstaAction'
    ]),
    async getInsta() {
      const result = await this.fetchInstaAction();
      this.items = result;
    }
  },
  created() {
    this.getInsta();
  }
}
</script>

<style>

</style>
