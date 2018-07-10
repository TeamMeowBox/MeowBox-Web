<template>
    <section v-if="getFlag === 2" class='date'>
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

   <div  v-else-if="getFlag === 4" class='price'>
       <p class="catInputTitle">미유박스<br><b>주문이 완료</b>되었습니다<br></p>
       <small>기다리는 반려묘들을 위해 빨리 배송할게요. <br>조금만 더 기다려주세요!</small>
   </div>
</template>

<script>
export default {
data(){
        return{
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
computed:{
    getFlag(){
        return this.$store.getters.getFlag
    }
}

}
</script>


<style lang="scss">
@import '../../assets/scss/Order.scss';

</style>
