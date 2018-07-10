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
   

   <v-btn class="back" v-if="flag > 0 && flag<4" @click="downFlag()">돌아가기</v-btn>
   <v-btn class="next" v-if="flag <4 " @click="upFlag()">다음</v-btn>
   <v-btn class="goHome" v-if="flag === 4" @click="back()">홈으로 돌아가기</v-btn>
</div>

</template>
<script>
import axios from 'axios'
import RegistCat from '../components/Order/RegistCat'
import OrderBar from '../components/Order/OrderBar'
import RegistOrder from '../components/Order/RegistOrder'
import { UP_FLAG,SET_FLAG } from '../store/constants/constants';
export default {
    data() {
        return {
            date:'',
            box:'',
            boxprice:0,
            checkedNames:'',
            address:{
                one:'',
                two:'',
                three:''
            },
            newAddress:{
                one:'',
                two:'',
                three:''
            },
            orderFlag:0,
            info : {
                name:'',
                phone_number:'',
                email:'',
                address:'',
                product:'',
                payment_method:''
            },
            newInfo :{
                name:'',
                phone_number:'',
                email:'',
                address:'',
                product:''
            }
        }
    },
    methods: {
        upFlag(){
            this.$store.commit(UP_FLAG);
            console.log(this.$store.getters.getFlag);
            
                // if(this.flag==4){
                //     if(this.orderFlag===0){
                //     this.order();
                //     }else{
                //         this.newOrder();
                //     }
                // }
                
        },
        downFlag(){
            if(this.flag>0){
                this.flag --;
            }
        },
        back() {
            this.$router.push('/');
            this.flag =0;

        },
       loadDaum () {
      var self = this;
      var element_layer = window.document.getElementById('layer')
      daum.postcode.load(function(){
        new daum.Postcode({
            oncomplete: function(data) {
                var fullAddr = ''; 
                var extraAddr = '';
                
                if (data.userSelectedType === 'R') { 
                    fullAddr = data.roadAddress;

                } else { 
                    fullAddr = data.jibunAddress;
                }

                if(data.userSelectedType === 'R'){
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

            if(self.orderFlag==0){
               self.address.one = data.zonecode; 
               self.address.two = fullAddr;
            }else if(self.orderFlag==1){
               self.newAddress.one = data.zonecode; 
               self.newAddress.two = fullAddr;
            }
               element_layer.style.display = 'none';
              
            }
        }).embed(element_layer);
      });

        element_layer.style.display = 'block';
        //화면 중간에 오게하기
        this.initLayerPosition(element_layer);
        
       },
       initLayerPosition(element_layer){
           var width = 300; 
           var height = 400; 
           var borderWidth = 5; 

        element_layer.style.width = width + 'px';
        element_layer.style.height = height + 'px';
        element_layer.style.border = borderWidth + 'px solid';
        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
           
       },
       closeDaumPostcode(){
           window.document.getElementById('layer').style.display='none';
       },
       order(){
           console.log("1");
           
           let headers = {headers: {
                             authorization: localStorage.token,
                             }}
           this.info.address += this.address.one+'@';
           this.info.address += this.address.two+'@';
           this.info.address += this.address.three;

           if(this.date === 1){
               this.date = this.checkedNames
           }
        
            this.info.user_idx = localStorage.getItem('user_idx')
            this.info.product = this.date;
            axios.post('http://13.209.220.1:3000/order/order_page',this.info,headers)
            .then(response => {
              console.log(response.data);
                  if(response.data.status === true){
                      console.log("주문완료");
                      
                  }else{
                    alert("주문정보를 다시 확인해주세요")
                  }
                 })
             .catch(e => {
              console.log(e);    
            })

       },newOrder(){
           let headers = {headers: {
                             authorization: localStorage.token,
                             }}
           this.newInfo.address += this.newAddress.one;
           this.newInfo.address += this.newAddress.two;
           this.newInfo.address += this.newAddress.three;
            
           if(this.date === 1){
               this.date = this.checkedNames
           }

            this.newInfo.user_idx = localStorage.getItem('user_idx')
            this.newInfo.product = this.date;
            axios.post('http://13.209.220.1:3000/order/order_page',this.newInfo,headers)
            .then(response => {
              console.log(response.data);
                  if(response.data.status === true){
                      console.log("주문완료");
                      
                  }else{
                    alert("주문정보를 다시 확인해주세요")
                  }
                 })
             .catch(e => {
              console.log(e);    
            })

            console.log("--------------------------");
            console.log(this.newInfo.email);
            

       },
       registCat(){
           console.log(this.cat);
           let headers = {headers: {
                             authorization: localStorage.token,
                             }}
           console.log(headers);
           
            axios.post('http://13.209.220.1:3000/user/cat_signup',this.cat,headers)
            .then(response => {
              console.log(response.data);
                  if(response.data.status === true){
                      console.log('등록완료');
                      console.log(response.data.result.cat_idx);
                      localStorage.cat_idx = response.data.result.cat_idx
                  }else{
                    alert("등록정보를 다시 확인해주세요")
                  }
                 })
             .catch(e => {
              console.log(e);    
            })

       }
    },
    computed: {
        // addprice: function(){
        //    let price = 0;
        //     for(let i = 0 ; i<this.checkedNames.length ; i++){
        //         price +=Number(this.checkedNames[i])
        //     }
        //     this.boxprice = price
        //     return this.boxprice
        // },
        getBirth: function(){
            return this.birth;
        },
        hasCat(){
            console.log(this.$store.getters.cat_idx);
            if(this.$store.getters.cat_idx !==-1){
                this.$store.commit(SET_FLAG)
            }
            return this.$store.getters.cat_idx
        }

    },created() {
        // let headers = {headers: {
        //                      authorization: localStorage.token,
        //                      }}
           
        //     axios.post('http://13.209.220.1:3000/order/order_page/'+localStorage.user_idx,headers)
        //     .then(response => {
        //       console.log(response.data);
        //           if(response.data.status === true){
        //               console.log(response.data.result);
                      
                      
        //           }else{
        //             alert("등록정보를 다시 확인해주세요")
        //           }
        //          })
        //      .catch(e => {
        //       console.log(e);    
        //     })
        
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
