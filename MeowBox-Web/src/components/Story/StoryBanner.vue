<template>
    <v-layout align-center column class="StoryBanner">
        <section class="first">
            <span class="header">내 고양이에게</span><br>
            <span class="header">꼭 필요한 특별 선물</span><br><br>
            <img src="../../assets/images/home/meow_text_logo.png" alt="" style="width:20vw;"><br><br>
            <v-btn class="box-order-go" router to="/order" >박스 주문하기</v-btn>
        </section>
        <section class="second">
            <table style="margin:auto">
                <tr>
                    <td>
                        <img src="../../assets/images/meow_box_story_img_1.png" alt="" style="width:25vw; height:30vh">
                    </td>
                    <td style="width:30vw; padding-left:5vw;">
                        <span class="header">매달, 새로운</span><br>
                        <span class="header">행복을 주고 싶어요</span><br>
                        <small class="story_small">새로운 것만 찾고, 까다로운 우리 고양이</small><br>
                        <small class="story_small">건강,비용... 신경쓸 게 한 두 가지가 아닌 집사</small>
                    </td>
                </tr>
            </table>
        </section>
        <section class="three" style="text-align:center; width:100%">
            <span class="col_pink">"&nbsp;</span><span class="bolder_font"> 우리가 함께, 쉽게 행복해질 수는 없을까요? </span><span class="col_pink">&nbsp;"</span>
        </section>
        <section class="four">
            <table style="margin:auto; width:67vw;">
                <tr>
                    <td style="text-align:center">
                        <div style="text-align:right">
                            <span class="header">
                                내 고양이의
                            </span>
                            <br>
                            <span class="header">
                                내 고양이를 위해
                            </span>
                            <br>
                            <span class="header">
                                내 고양이에 의해
                            </span>
                        </div>
                        <br>
                        <small>"미유박스는 당신의 고양이를 위해</small><br>
                        <small>끝없이 고민하고, 준비했어요"</small>
                    </td>
                    <td style="text-align:center">
                        <img src="../../assets/images/meow_box_story_img_2.png" alt="" style="width:10vw;"><br><br>
                        <small>꼼꼼하고<br>센스있는 장난감</small>
                    </td>
                    <td style="text-align:center">
                        <img src="../../assets/images/meow_box_story_img_3.png" alt="" style="width:10vw;"><br><br>
                        <small>수의사가 체크한<br>건강하고 맛있는 간식</small>
                    </td>
                </tr>
            </table>
        </section>
        <section class="five" style="display:table">
            <div style="display:table-cell; vertical-align:middle">
                <span class="header">만약 네가 7월에 온다면,</span><br>
                <span class="header">나는 6월말부터 행복해질 거야</span><br>
                <small>생택쥐페리 「어린왕자」 중에서</small><br><br>
                <p><span class="col_pink">“ </span>매 월 첫 번째 월요일 당신의 고양이에게 설렘을 배송할게요<span class="col_pink"> "</span></p>
            </div>
        </section>
        <section class="six" style="text-align:center">
            <img src="../../assets/images/meow_box_story_img_5.png" alt="" style="width:40vw">
            <p class="header">당신은 <span class="underline-pink">사랑만</span> 주세요</p>
            <p class="header"><span class="underline-pink">고민은 미유박스</span>가 할게요</p>
            <v-btn class="box-order-go" router to="/order" >미유박스 주문하기</v-btn>
        </section>
    </v-layout>
</template>

<script>
export default {
    name:'StoryBanner'
}
</script>

<style lang="scss">
@import '../../assets/scss/StoryBanner.scss';
.five {
    background: url('../../assets/images/meow_box_story_img_4.png') no-repeat;
    width:100%;
    height:50vh;
    background-size:contain;
    background-position:right;
    text-align:center;
}

.first {
    background: url('../../assets/images/meow_box_story_main.png') no-repeat;
    width:100%;
    height:40vh;
    background-size:cover;
    background-position:right;
    vertical-align: middle;
}

</style>
