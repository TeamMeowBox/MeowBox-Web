<template>
<div class="order-container container" style="width:70vw;">
    <br>
    <!-- <section style="text-align:right;">
        <template v-if="flag!==4">
            <span v-for="(category, index) in categorys" :key="index" style="font-size:1.2rem">
                <b v-if="category.cate_id===flag" style="color:#e68789">
                    {{category.numberCircle}}{{category.cateName}}&nbsp;&nbsp;
                </b>
                <template v-if="category.cate_id!==flag">
                    {{category.cateName}}&nbsp;
                </template>
            </span>
        </template>
    </section> -->
    <br><br>
    <regist-cat v-if="hasCat==-1"></regist-cat>
    <regist-order v-else></regist-order>
   

   <v-btn class="back" v-if="getFlag > 0 && getFlag<4" @click="downFlag()">돌아가기</v-btn>
   <v-btn class="next" v-if="getFlag <4 " @click="upFlag()">다음</v-btn>
   <v-btn class="goHome" v-if="getFlag === 4" @click="back()">홈으로 돌아가기</v-btn>
</div>

</template>
<script>
import axios from 'axios'
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
             if (localStorage.cat_idx != -1) {
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
       if(this.$store.getters.cat_idx !==-1){
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
