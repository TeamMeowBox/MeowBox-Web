<template>
<div class="container" style="width:70vw;">
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
            <p>이름*</p>
            <v-text-field class="catName" v-model="name" placeholder="반려묘 이름" required/>
        </aside>
   </section>
   <section v-else-if="flag === 1" class='etc'>
      <aside>
        <p class="catInputTitle"><b>(여기에 반려동물 이름)</b>에 대해<br>더 자세히 알려주세요!<small>필수항목(*)은 꼭 입력해주세요.</small></p>
      </aside>
      <aside class="size">
        <p>크기*</p>
        <input id="small" class="radio-inline__input" type="radio" name="accessible-radio" checked="checked" v-model="size" value="small"/>
        <label class="radio-inline__label" for="small">
            <v-card>
                <v-card-media
                src="https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg"
                height="10vh" width="12vw"
                ></v-card-media>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">조금 마른</h5>
                    <div>먼치킨 종 부터<br>몸무게가 1-2kg 인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
        <input id="middle" class="radio-inline__input" type="radio" name="accessible-radio" v-model="size"  value="middle"/>
        <label class="radio-inline__label" for="middle">
            <v-card>
                <v-card-media
                src="https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg"
                height="10vh" width="12vw"
                ></v-card-media>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">보통</h5>
                    <div>일반적인 무게<br>몸무게가 2-4kg인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
        <input id="large" class="radio-inline__input" type="radio" name="accessible-radio" v-model="size" value="large" />
        <label class="radio-inline__label" for="large">
            <v-card>
                <v-card-media
                src="https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg"
                height="10vh" width="12vw"
                ></v-card-media>
                <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">과체중</h5>
                    <div>비만이거나 몸집이 큼<br>몸무게가 5kg 이상인 고양이</div>
                </div>
                </v-card-title>
            </v-card>
        </label>
      </aside>
      <aside>
        <p>생일*</p>
        <input type="date" name="bdaytime" v-model="birth">
       
      </aside>
      <aside>
        <p>알레르기 및 특이사항</p>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          v-model="etc"
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
                </td>
                <td class="one_pay_info" v-if="date===1" style="transition:2s">
                    <input type="checkbox" id="package_box" value=39900 v-model="checkedNames">
                    <label for="package_box">7월 패키지 박스</label>
                    <input type="checkbox" id="first_box" value=27000 v-model="checkedNames">
                    <label for="first_box">고양이는 처음이지? 박스</label>
                    <br>
                    <span>체크한 이름: {{ addprice }}</span>원
                </td>
            </tr>
        </table>
        <!-- <div class ="one_pay">
            <input type="radio" id="huey" name="month" v-model="date" v-bind:value=1 />
            <label for="one">
                한번만받기
            </label>
        </div>
        <div v-if="date===1">
            <input type="checkbox" id="package_box" value=39900 v-model="checkedNames">
            <label for="package_box">7월 패키지 박스</label>
            <input type="checkbox" id="first_box" value=27000 v-model="checkedNames">
            <label for="first_box">고양이는 처음이지? 박스</label>
            <br>
            <span>체크한 이름: {{ addprice }}</span>원
        </div> -->
    </aside>

    <aside class="three_pay">
        <input type="radio" id="three_months" name="month"  v-model="date" v-bind:value=2 />
        <label for="huey">3개월 정기 배송 / 월</label><br>
        <span>37,000원</span>
    </aside>

    <aside class="six_pay">
        <input type="radio" id="six_months" name="month"  v-model="date" v-bind:value=3  />
        <label for="dewey">6개월 정기 배송 / 월</label><br>
        <span>35,000원</span>
    </aside>

    <aside class="twelve_pay">
        <input type="radio" id="brith_box" name="month"  v-model="date" v-bind:value=4  />
        <label for="louie">생일 박스</label><br>
        <span>32,500 원</span>
    </aside>
   </section>

   
   
   <div  v-else-if="flag === 3" class='price'>
       <div>
           주문자 정보<br>
           주문하시는 분 : <input type="text"><br>
            <input type="text" id="sample2_postcode" placeholder="우편번호" v-model="address.zonecode">
            <input type="button" @click="loadDaum()" value="우편번호 찾기"><br>
            <input type="text" id="sample2_address" placeholder="한글주소" v-model="address.fullAddr">
            <input type="text" id="sample2_addressEnglish" placeholder="상세주소" v-model="address.subAddr"><br>
            휴대전화 : <input type="text" v-model="phone.firstNum"> - <input type="text" v-model="phone.secondNum"> - <input type="text" v-model="phone.thirdNum"><br>
            이메일 : <input type="text" v-model="email.firstEmail"> @<input type="text" v-model="email.secondEmail">
            <div id="layer" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
            <img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" @click="closeDaumPostcode()" alt="닫기 버튼">
            </div>
       </div>

       <div>
           결제금액<br>
           7월 패키지 박스<br>
           구독기간 : <p>{{date}}</p>
           반려묘 크기 : <p>{{size}}</p>
           특이사항 :<p>{{etc}}</p>
           소계 <p>{{boxprice}}</p>
           배송 <p>무료배송</p>
           최종결제금액 <p>{{boxprice}}</p>
       </div>
       
       <div>
           주문자 정보<br>
            <input type="checkbox" id="orderFlag" value=1 v-model="orderFlag">
            <label for="orderFlag">주문자와 다른 주소로 배송</label><br>
           주문하시는 분 : <input type="text"><br>
            <input type="text" id="sample2_postcode" placeholder="우편번호" v-model="address.zonecode">
            <input type="button" @click="loadDaum()" value="우편번호 찾기"><br>
            <input type="text" id="sample2_address" placeholder="한글주소" v-model="address.fullAddr">
            <input type="text" id="sample2_addressEnglish" placeholder="상세주소" v-model="address.subAddr"><br>
            휴대전화 : <input type="text" > - <input type="text"> - <input type="text"><br>
            이메일 : <input type="text"> @<input type="text">
            <div id="layer" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
            <img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
            </div>
       </div>

       <div>
           결제정보<br>
           결제수단 
           <input type="radio" id="card" name="month"  v-model="payment" v-bind:value=1 />
            <label for="card">신용카드</label>

           <input type="radio" id="transfer" name="month"  v-model="payment" v-bind:value=2 />
            <label for="transfer">실시간 계좌이체</label>


           <input type="radio" id="virtual_account" name="month"  v-model="payment" v-bind:value=2 />
            <label for="virtual_account">가상 계좌</label>

           <input type="radio" id="phone_payment" name="month"  v-model="payment" v-bind:value=2 />
            <label for="phone_payment">휴대폰 결제</label>

           <input type="radio" id="kakao_pay" name="month"  v-model="payment" v-bind:value=2 />
            <label for="kakao_pay">카카오 페이</label>
       </div>
   </div>






   <div  v-else-if="flag === 4" class='price'>
       5
   </div>

   <v-btn color="error" v-if="flag > 0 && flag<4" @click="downFlag()">돌아가기</v-btn>
   <v-btn color="error" v-if="flag <4 " @click="upFlag()">다음</v-btn>
   <v-btn color="error" v-if="flag === 4" @click="back()">홈으로 돌아가기</v-btn>
</div>

</template>
<script>
export default {
    data() {
        return {
            flag : 0,
            name : '',
            size : '',
            etc : '',
            birth:'',
            date:'',
            box:'',
            boxprice:0,
            checkedNames:[],
            address:{
                zonecode:'',
                fullAddr:'',
                subAddr:''
            },
            payment:'',
            orderFlag:'',
            phone:{
                firstNum:'',
                secondNum:'',
                thirdNum: ''
            },
            email:{
                firstEmail:'',
                secondEmail:''
            },
            categorys:[
                {cate_id : 0, cateName : '이름', numberCircle:'❶ '},
                {cate_id : 1, cateName : '기타', numberCircle:'❷ '},
                {cate_id : 2, cateName : '기간', numberCircle:'❸ '},
                {cate_id : 3, cateName : '결제', numberCircle:'❹ '}
            ]

        }
    },
    methods: {
        upFlag(){
                this.flag ++;
        
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

               self.address.zonecode = data.zonecode;               
               self.address.fullAddr = fullAddr;
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
       }
    },
    computed: {
        addprice: function(){
           let price = 0;
            for(let i = 0 ; i<this.checkedNames.length ; i++){
                price +=Number(this.checkedNames[i])
            }
            this.boxprice = price
            return this.boxprice
        },
        getBirth: function(){
            return this.birth;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/Order.scss';
.date > div {
    
}
input {
    transition: 2s;
}
input:checked + .one_pay_info {
    width:1000px
}

</style>
