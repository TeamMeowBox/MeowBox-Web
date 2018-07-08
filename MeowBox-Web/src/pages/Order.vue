<template>
<div class="order-container container" style="width:70vw;">
    <br>
    <section style="text-align:right;">
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
    </section>
    <br><br>
    <section v-if="flag === 0" class='name'>
        <aside>
            <p class="catInputTitle">반려묘의<br><b>이름</b>은 무엇인가요?<small>필수항목(*)은 꼭 입력해주세요.</small></p>
            <p>이름<span class="star">*</span></p>
            <v-text-field class="catName" v-model="cat.name" placeholder="반려묘 이름" required/>
        </aside>
   </section>
   <section v-else-if="flag === 1" class='etc'>
      <aside>
        <p class="catInputTitle"><b>(여기에 반려동물 이름)</b>에 대해<br>더 자세히 알려주세요!<small>필수항목(*)은 꼭 입력해주세요.</small></p>
      </aside>
      <aside class="size">
        <p>체형<span class="star">*</span></p>
        <input id="small" class="radio-inline__input" type="radio" name="accessible-radio" checked="checked" v-model="cat.size" value='0'/>
        <label class="radio-inline__label" for="small">
            <v-card>
                <img src="../assets/images/small-cat-img.png" alt=""/>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">조금 마른</h5>
                    <div>먼치킨 종 부터<br>몸무게가 1-2kg 인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
        <input id="middle" class="radio-inline__input" type="radio" name="accessible-radio" v-model="cat.size"  value='1'/>
        <label class="radio-inline__label" for="middle">
            <v-card>
                <img src="../assets/images/medium-cat-img.png" alt=""/>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">보통</h5>
                    <div>일반적인 무게<br>몸무게가 2-4kg인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
        <input id="large" class="radio-inline__input" type="radio" name="accessible-radio" v-model="cat.size" value='2' />
        <label class="radio-inline__label" for="large">
            <v-card>
                <img src="../assets/images/large-cat-img.png" alt=""/>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">과체중</h5>
                    <div>비만이거나 몸집이 큼<br>몸무게가 5kg 이상인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
      </aside>
      <br/>
      <br/>
      <aside>
        <p>생일<span class="star">*</span></p>
        <input type="date" name="bdaytime" v-model="cat.birthday">
      </aside>
      <br/>
      <br/>
      <aside>
        <p>알레르기 및 특이사항</p>
        <v-textarea
          solo
          name="input-7-4"
          v-model="cat.caution"
          label="알레르기가 있는 재료나 좋아하는 재료에 대해 적어주세요."
        ></v-textarea>
      </aside>
   </section>
   
   <section v-else-if="flag === 2" class='date'>
    <aside>
        <table>
            <tr>
                <td class="one_pay">
                    <input type="radio" id="huey" name="month" v-model="date" v-bind:value=1 />
                    <label for="one">
                        한번만받기
                    </label>
                    <br>
                    <span> 39900원</span>
                </td>
                <td class="one_pay_info" v-if="date===1" style="transition:2s">
                    <input type="radio" id="box" v-model="checkedNames" v-bind:value=1>
                    <label for="box">7월 패키지 박스</label>
                    <input type="radio" id="box" v-model="checkedNames" v-bind:value=2>
                    <label for="box">고양이는 처음이지? 박스</label>
                    <br>
                    <span>체크한 이름: 39900</span>원
                </td>
            </tr>
        </table>
    </aside>

    <aside class="three_pay">
        <input type="radio" id="three_months" name="month"  v-model="date" v-bind:value=3 />
        <label for="huey">3개월 정기 배송 / 월</label><br>
        <span>37,000원</span>
    </aside>

    <aside class="six_pay">
        <input type="radio" id="six_months" name="month"  v-model="date" v-bind:value=6  />
        <label for="dewey">6개월 정기 배송 / 월</label><br>
        <span>35,000원</span>
    </aside>

    <aside class="twelve_pay">
        <input type="radio" id="brith_box" name="month"  v-model="date" v-bind:value=7  />
        <label for="louie">생일 박스</label><br>
        <span>32,500 원</span>
    </aside>
   </section>

   
   
   <div class="price" v-else-if="flag === 3">
       <div class="title container">
           <p>미유박스를 받기 위한</p>
           <p><b>정보</b>를</p>
           <p>입력해주세요&nbsp;<small class="star">필수항목(*)은 꼭 입력해주세요</small></p>
       </div>
       <v-layout class="container" style="width:70vw;">
            <section xs12 sm6>
                <div>
                    <input type="radio" id="last-delievery" name="month"  v-model="orderFlag" v-bind:value=0 checked/> 이전 배송지 불러오기 &nbsp;
                    <input type="radio" id="last-delievery" name="month"  v-model="orderFlag" v-bind:value=1 /> 새로 입력하기
                </div>
                <br>
                <hr class="pay-hr2">
                <br>
                <div v-if="orderFlag===0">
                    <b>주문자 정보</b><br>
                    <table>
                        <tr>
                            <td class="label">
                                주문자명
                            </td>
                            <td>
                                <v-text-field class="order-name" type="text" v-model="info.name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td>
                                <v-text-field type="text" class="post-num" id="sample2_postcode" placeholder="우편번호" v-model="address.one"/>
                                <v-btn class="fint-post-num" @click="loadDaum()">우편번호 찾기</v-btn><br>
                                <v-text-field type="text" class="address" id="sample2_address" placeholder="한글주소" v-model="address.two"/><br/>
                                <v-text-field type="text" class="detail-address" id="sample2_addressEnglish" placeholder="상세주소" v-model="address.three"/>
                            </td>
                        </tr>
                        <tr>
                            <td>휴대전화</td>
                            <td><v-text-field class="order-name" type="text" v-model="info.phone_number"/></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><v-text-field class="order-name" type="text" v-model="info.email"/></td>
                        </tr>
                        <div class="layer" id="layer">
                        <img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" @click="closeDaumPostcode()" alt="닫기 버튼">
                        </div>
                    </table>
                </div>
                <div v-if="orderFlag===1">
                    <b>주문자 정보</b><br>
                    <table>
                        <tr>
                            <td class="label">
                                주문자명
                            </td>
                            <td>
                                <v-text-field class="order-name" type="text" v-model="newInfo.name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td>
                                <v-text-field type="text" class="post-num" id="sample2_postcode" placeholder="우편번호" v-model="newAddress.one"/>
                                <v-btn class="fint-post-num" @click="loadDaum()">우편번호 찾기</v-btn><br>
                                <v-text-field type="text" class="address" id="sample2_address" placeholder="한글주소" v-model="newAddress.two"/><br/>
                                <v-text-field type="text" class="detail-address" id="sample2_addressEnglish" placeholder="상세주소" v-model="newAddress.three"/>
                            </td>
                        </tr>
                        <tr>
                            <td>휴대전화</td>
                            <td><v-text-field class="order-name" type="text" v-model="newInfo.phone_number"/></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><v-text-field class="order-name" type="text" v-model="newInfo.email"/></td>
                        </tr>
                        <div class="layer" id="layer">
                        <img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" @click="closeDaumPostcode()" alt="닫기 버튼">
                        </div>
                    </table>
                </div>
                
                <br><br><br>
                
                <br>
                <hr class="dotted-hr">
                <br>


                <div class="pay-way">
                    <b>결제 정보</b><br>
                    <br>
                    <span>결제수단<span class="star">*</span></span> &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="card" name="month"  v-model="info.payment_method" v-bind:value=1 />
                        <label for="card">신용카드</label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="transfer" name="month"  v-model="info.payment_method" v-bind:value=2 />
                        <label for="transfer">실시간 계좌이체</label>
                    &nbsp; &nbsp; &nbsp;

                    <input type="radio" id="virtual_account" name="month"  v-model="info.payment_method" v-bind:value=2 />
                        <label for="virtual_account">가상 계좌</label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="phone_payment" name="month"  v-model="info.payment_method" v-bind:value=2 />
                        <label for="phone_payment">휴대폰 결제</label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="kakao_pay" name="month"  v-model="info.payment_method" v-bind:value=2 />
                        <label for="kakao_pay">페이코</label>
                </div>
            </section>
            <section xs12 sm6 offset-sm3 style="margin-left:4vw">
                <div>
                    <b style="color:$dark-gray">결제금액</b><br><br>
                    <div class="pay-price">
                        <table class="pay-price-table">
                            <tr>
                                <td colspan="2">
                                    <p style="font-size:1.5rem">7월 패키지 박스</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    구독기간 : {{date}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    반려묘 크기 : {{cat.size}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    특이사항 : {{cat.caution}}
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>소계</td>
                                <td class="money-info"><p>{{boxprice}}원</p></td>
                            </tr>
                            <tr>
                                <td>배송</td>
                                <td class="money-info"><p>무료배송</p></td>
                            </tr>
                            <tr>
                                <td colspan="2"><hr class="pay-hr"></td>
                            </tr>
                            <tr>
                                <td>최종결제금액</td>
                                <td class="money-info last-price"><p>{{boxprice}}</p></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </section>
        </v-layout>
       
       
   </div>

   <div  v-else-if="flag === 4" class='price'>
       <p class="catInputTitle">미유박스<br><b>주문이 완료</b>되었습니다<br></p>
       <small>기다리는 반려묘들을 위해 빨리 배송할게요. <br>조금만 더 기다려주세요!</small>
   </div>

   <v-btn class="back" v-if="flag > 0 && flag<4" @click="downFlag()">돌아가기</v-btn>
   <v-btn class="next" v-if="flag <4 " @click="upFlag()">다음</v-btn>
   <v-btn class="goHome" v-if="flag === 4" @click="back()">홈으로 돌아가기</v-btn>
</div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            flag : 0,
            cat:{
            name : '',
            size : '',
            caution : '',
            birthday:'',
            },
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
            categorys:[
                {cate_id : 0, cateName : '이름', numberCircle:'❶ '},
                {cate_id : 1, cateName : '기타', numberCircle:'❷ '},
                {cate_id : 2, cateName : '기간', numberCircle:'❸ '},
                {cate_id : 3, cateName : '결제', numberCircle:'❹ '}
            ],
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
                this.flag ++;
                if(this.flag==4){
                    if(this.orderFlag===0){
                    this.order();
                    }else{
                        this.newOrder();
                    }
                }
                if(this.flag==2){
                    this.registCat();
                }
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
}
</script>

<style lang="scss">
@import '../assets/scss/Order.scss';

</style>
