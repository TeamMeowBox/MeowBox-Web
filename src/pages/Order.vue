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
       4
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
            checkedNames:[]
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
