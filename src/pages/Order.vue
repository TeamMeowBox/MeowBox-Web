<template>
<div class="container">
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
        <input id="small" class="radio-inline__input" type="radio" name="accessible-radio" value="small" checked="checked" />
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
        <input id="middle" class="radio-inline__input" type="radio" name="accessible-radio" value="middle" />
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
        <input id="large" class="radio-inline__input" type="radio" name="accessible-radio" value="large" />
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
        <input type="datetime-local" name="bdaytime">
      </aside>
      <aside>
        <p>알레르기 및 특이사항</p>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>

      </aside>
   </section>
   
   <section v-else-if="flag === 2" class='date'>
    <aside>
        <div class ="one_pay">
            <input type="radio" id="huey" name="month" v-model="date" v-bind:value=1 />
            <label for="one">한번만받기</label>
        </div>
        <div v-if="date===1">
            <input type="checkbox" id="package_box" value=39900 v-model="checkedNames">
            <label for="package_box">7월 패키지 박스</label>
            <input type="checkbox" id="brith_box" value=17000 v-model="checkedNames" >
            <label for="brith_box">생일냥이를 위한 생일박스</label>
            <input type="checkbox" id="first_box" value=27000 v-model="checkedNames">
            <label for="first_box">고양이는 처음이지? 박스</label>
            <br>
            <span>체크한 이름: {{ addprice }}</span>원
        </div>
    </aside>

    <aside class="three_pay">
        <input type="radio" id="three_months" name="month"  v-model="date" v-bind:value=2 />
        <label for="huey">3개월 정기 배송</label><br>
        <span>37,000원</span>
    </aside>

    <aside class="six_pay">
        <input type="radio" id="six_months" name="month"  v-model="date" v-bind:value=3  />
        <label for="dewey">6개월 정기 배송</label><br>
        <span>35,000원</span>
    </aside>

    <aside class="twelve_pay">
        <input type="radio" id="twelve_month" name="month"  v-model="date" v-bind:value=4  />
        <label for="louie">12개월 정기 배송</label><br>
        <span>32,500 원</span>
    </aside>

   </section>

   
   
   <div  v-else-if="flag === 3" class='price'>
       <div>
           주문자 정보<br>
           주문하시는 분 : <input type="text"><br>
            <input type="text" id="sample2_postcode" placeholder="우편번호" v-model="zonecode">
            <input type="button" @click="loadDaum()" value="우편번호 찾기"><br>
            <input type="text" id="sample2_address" placeholder="한글주소" v-model="fullAddr">
            <input type="text" id="sample2_addressEnglish" placeholder="상세주소" v-model="subAddr">
           
            <div id="layer" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
            <img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
            </div>
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
            zonecode:'',
            fullAddr:'',
            subAddr:''
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
      daum.postcode.load(function(){
        new daum.Postcode({
            oncomplete: function(data) {
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수
                
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;

                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
               self.zonecode = data.zonecode; //5자리 새우편번호 사용
               
               self.fullAddr = fullAddr;
            }
        }).open();
      });
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
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/Order.scss';
.date > div {
    
}
</style>
