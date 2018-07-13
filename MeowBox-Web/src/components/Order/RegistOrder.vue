<template>
  <v-layout v-if="getFlag === 2" class='date'>
    <input id="one" class="radio-inline__input" type="radio" name="month" checked="checked" v-model="date" v-bind:value=1 />
    <label xs12 sm6 md4 lg3 class="radio-inline__label" for="one">
      <table>
        <tr>
          <td class="one_pay">
            <v-card>
              <img src="../../assets/images/one-period-img.png" alt=""/>
              <v-card-title primary-title>
                <table>
                  <tr>
                    <td>
                      <h4>한 번만 받기</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>39,900 원</p>
                    </td>
                  </tr>
                </table>
              </v-card-title>
            </v-card>
          </td>
          <td class="one_pay_info" v-if="date===1">
            <div>
              <input type="radio" id="box" v-model="checkedNames" v-bind:value=1>
              <label for="box">7월 패키지 박스</label><br>
              <input type="radio" id="box" v-model="checkedNames" v-bind:value=2>
              <label for="box">고양이는 처음이지? 박스</label>
              <br>
            </div>
          </td>
        </tr>
      </table>
    </label>

    <input id="three_months" class="radio-inline__input" type="radio" name="accessible-radio" v-model="date" v-bind:value=3 />
    <label xs12 sm6 md4 lg3 class="radio-inline__label" for="three_months">
      <v-card>
        <img src="../../assets/images/three-period-img.png" alt=""/>
        <v-card-title primary-title>
          <table>
            <tr>
              <td>
                <h4>3개월 정기 배송 / 월</h4>
              </td>
            </tr>
            <tr>
              <td>
                <p>37,000 원</p>
              </td>
            </tr>
          </table>
        </v-card-title>
      </v-card>
    </label>

    <input id="six_months" class="radio-inline__input" type="radio" name="accessible-radio" v-model="date" v-bind:value=6 />
    <label xs12 sm6 md4 lg3 class="radio-inline__label" for="six_months">
      <v-card>
        <img src="../../assets/images/six-period-img.png" alt=""/>
        <v-card-title primary-title>
          <table>
            <tr>
              <td>
                <h4>6개월 정기 배송 / 월</h4>
              </td>
            </tr>
            <tr>
              <td>
                <p>35,000 원</p>
              </td>
            </tr>
          </table>
        </v-card-title>
      </v-card>
    </label>

    <input id="brith_box" class="radio-inline__input" type="radio" name="accessible-radio" v-model="date" v-bind:value=7 />
    <label xs12 sm6 md4 lg3 class="radio-inline__label" for="brith_box">
      <v-card>
        <img src="../../assets/images/birthday-period-img.png" alt=""/>
        <v-card-title primary-title>
          <table class="brith_box">
            <tr>
              <td style="width:8vw">
                <h4>생일 박스</h4>
              </td>
            </tr>
            <tr>
              <td>
                <p>32,500 원</p>
              </td>
            </tr>
          </table>
        </v-card-title>
      </v-card>
    </label>
  </v-layout>



  <div class="price" v-else-if="getFlag === 3">
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
                  반려묘 크기 : {{catSize}}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  특이사항 : {{catEtc}}
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
        <img src="../../assets/images/meow_box_order_final_img.png" style="width:20vw; height:40vh">
      </section>
    </v-layout>
  </div>

  <div  v-else-if="getFlag === 4" class='price'>
    <p class="catInputTitle">미유박스<br><b>주문이 완료</b>되었습니다<br></p>
    <small>기다리는 반려묘들을 위해 빨리 배송할게요. <br>조금만 더 기다려주세요!</small>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import axios from 'axios';
  export default {
    data(){
      return{

        catSize:'',
        catEtc:'',
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
    computed:{
      getFlag(){
        if(this.$store.getters.getFlag ===3){
          if(this.date ===1 || this.date ===2){
            this.boxprice = 399
          }
          if(this.date ===3 ){
            this.boxprice = 370
          }
          if(this.date === 6){
            this.boxprice = 350
          }
          if(this.date === 7){
            this.boxprice = 325
          }

          axios.get(`http://13.124.92.40:3000/order/order_page/product/`+this.date, {headers: {authorization: localStorage.getItem('token')}})
            .then((res) => {
              if (res.data.result == 1) {
                console.log(res.data.status);

                console.log("go");
              }else{
                console.log("fail");
                alert("이미 정기권을 구매했습니다.")
                this.$router.push("/")
              }
            })
        }
        if (this.$store.getters.getFlag === 4 && localStorage.cat_idx !== -1) {
          if(this.orderFlag===1){

            this.newInfo.address += this.newAddress.one+'@';
            this.newInfo.address += this.newAddress.two+'@';
            this.newInfo.address += this.newAddress.three;
            this.newInfo.product = this.date;
            this.newInfo.price = this.boxprice;
            console.log(this.newInfo);

            this.$store.dispatch('orderAction', this.newInfo)
            console.log(result);

            const IMP = window.IMP; // 생략해도 괜찮습니다.

          }else{

            this.info.address += this.address.one+'@';
            this.info.address += this.address.two+'@';
            this.info.address += this.address.three;
            this.info.product = this.date;
            this.info.price = this.boxprice;
            console.log(this.info);

            this.$store.dispatch('orderAction',this.info)

          }
        }
        return this.$store.getters.getFlag;
      }
    },
    methods:{
      ...mapActions([
        'fetchCatAction','getOrder'
      ]),
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
      async getCatProfile() {
        const cat = await this.fetchCatAction();
        const order = await this.getOrder();


        if( order.order_idx !==-1){
          this.catSize = cat.size;
          this.catEtc = cat.caution;
          this.info.name = order.name;
          this.info.phone_number = order.phone_number;
          this.address.one = order.address.split('@')[0]
          this.address.two = order.address.split('@')[1]
          this.address.three = order.address.split('@')[2]
        }
      }
    },
    async created() {
      await this.getCatProfile();
    },

  }
</script>


<style lang="scss">
  @import '../../assets/scss/Order.scss';
  .date {
    background: url("../../assets/images/meow_box_order_step_3_img.png") no-repeat;
    background-position:right bottom;
    background-size: 45%;
    height:80vh;
  }
</style>
