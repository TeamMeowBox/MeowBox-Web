<template>
<div class="order-container container" style="width:70vw;">
    <br>
    <order-bar></order-bar>
    <br><br>
    <regist-cat v-if="hasCat==-1"></regist-cat>
    <regist-order v-else></regist-order>


   <v-btn class="back" v-if="getFlag > 0 && getFlag<4 && hasCat==-1 || getFlag==3" @click="downFlag()" style="position:relative; bottom:10vh; margin-bottom:-10vh;">돌아가기</v-btn>
   <v-btn class="next" v-if="getFlag <4 " @click="upFlag()" style="position:relative; bottom:10vh; margin-bottom:-10vh;">다음</v-btn>
   <v-btn class="goHome" v-if="getFlag === 4" @click="back()" style="position:relative; bottom:10vh; margin-bottom:-10vh;">홈으로 돌아가기</v-btn>
</div>

</template>
<script>
import RegistCat from '../components/Order/RegistCat'
import OrderBar from '../components/Order/OrderBar'
import RegistOrder from '../components/Order/RegistOrder'
import { DOWN_FLAG,UP_FLAG,SET_FLAG, DEFAULT_FLAG } from '../store/constants/constants';

export default {
    data() {
        return {

        }
    },
    methods: {
        upFlag(){
            this.$store.commit(UP_FLAG);
            console.log(this.$store.getters.getFlag);
        },
        downFlag(){
            this.$store.commit(DOWN_FLAG);
        },
        back() {
             if (localStorage.cat_idx !== -1) {
              this.$store.commit(SET_FLAG);
            }
            this.$router.push('/');
        }
    },
    computed: {
        getBirth: function(){
            return this.birth;
        },
        hasCat(){
            return this.$store.getters.cat_idx
        },
        getFlag(){
            return this.$store.getters.getFlag
        }

    },created() {
       if(this.$store.getters.cat_idx !=-1){
           this.$store.commit(SET_FLAG)
       }else{
           this.$store.commit(DEFAULT_FLAG)
       }
    },
    components: {
    OrderBar,
    RegistCat,
    RegistOrder
  },


}
</script>

<style lang="scss">
@import '../assets/scss/Order.scss';

</style>
