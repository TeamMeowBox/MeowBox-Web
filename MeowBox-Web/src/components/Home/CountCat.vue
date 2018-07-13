<template>
  <div class="cat-info">
    <span><b>{{count}}</b> 마리의 고양이가</span><br>
    <span>상자 안에 들어왔어요</span>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'CountCat',
  data() {
    return {
      count: null
    };
  },
  methods: {
    ...mapActions([
      'fetchCatCountAction'
    ]),
  },
  async created() {
    const result = await this.fetchCatCountAction();
    console.log(result);
    this.count = result;
  }
}
</script>
