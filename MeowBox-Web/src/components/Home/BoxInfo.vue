<template>
  <div class="container" style="width:70vw;">
    <table style="margin:auto">

      <tr v-for="(item, index) in items" :key="index">
        <td rowspan="2" style="padding:1rem; text-align:left;">
          <v-card>
            <v-card-title primary-title>
              <div >
                <h3 class="headline mb-0">
                  {{item.nickname}}
                </h3>
                <div>
                  {{item.profile}}
                </div>
              </div>
            </v-card-title>

            <v-card-media
              :src="item.picture"
              height="200px"
            ></v-card-media>
          </v-card>
        </td>
      </tr>

    </table>
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
