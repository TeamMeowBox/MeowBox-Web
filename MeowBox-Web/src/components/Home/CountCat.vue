<template>
  <div>
    {{count}}마리의 고양이가 태어났다
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
