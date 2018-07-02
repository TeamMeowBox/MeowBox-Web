<template>
<div>   
    <div v-if="flag === 0" class='name'>
        <p>반려묘의 이름은 무엇인가요?</p>
        이름:
        <br>
        <input type="text">
   </div>
   <div v-else-if="flag === 1" class='etc'>
      <div class="size">
           크기
            <br>
        <input type="radio" id="small" name="size" checked />
        <label for="sm">마름</label>
        <input type="radio" id="middle" name="size" />
        <label for="mi">중간</label>
        <input type="radio" id="big" name="size" />
        <label for="bi">큼</label>
    </div>
        <br>
        생일
        <input type="datetime-local" name="bdaytime">
        <br>

        특이사항
        <br>
        <textarea></textarea>
   </div>
   
   <div v-else-if="flag === 2" class='date'>
    <div>
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
    </div>

    <div class="three_pay">
        <input type="radio" id="three_months" name="month"  v-model="date" v-bind:value=2 />
        <label for="huey">3개월 정기 배송</label><br>
        <span>37,000원</span>
    </div>

    <div class="six_pay">
        <input type="radio" id="six_months" name="month"  v-model="date" v-bind:value=3  />
        <label for="dewey">6개월 정기 배송</label><br>
        <span>35,000원</span>
    </div>
    <div class="twelve_pay">
        <input type="radio" id="twelve_month" name="month"  v-model="date" v-bind:value=4  />
        <label for="louie">12개월 정기 배송</label><br>
        <span>32,500 원</span>
    </div>
   </div>
   
   
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



   <button v-if="flag <4 " @click="upFlag()">다음</button>
    <button v-if="flag === 4" @click="back()">홈으로 돌아가기</button>
   <button v-if="flag > 0 && flag<4" @click="downFlag()">돌아가기</button>
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

<style>
.date > div {
    
}
</style>
