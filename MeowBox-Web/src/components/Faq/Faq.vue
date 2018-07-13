<template>
    <v-container class="faq-container" style="width:70vw">
        <section>
            <b class="faqTitle">자주 묻는 질문</b>
        </section>
        <br/>
        <br/>
        <hr class="section-divide" >
        <v-expansion-panel>
            <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">제품</td>
                        <td >Q&nbsp;&nbsp;간식과 사료의 성분을 알 수 있을까요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;미유박스를 받으시면 간식/사료 포장 뒷면에 성분이 표기되어있습니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">제품</td>
                        <td>Q&nbsp;&nbsp;장난감은 같은 것으로 구성되어 있나요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;장난감은 매달 컨셉에 맞게 다른 상품으로 구성됩니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">제품</td>
                        <td>Q&nbsp;&nbsp;크기는 어느정도 되나요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;미유박스는 350x240x150(mm)의 상자에 상품이 담겨 배송됩니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
                        <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">배송</td>
                        <td>Q&nbsp;&nbsp;배송일은 며칠정도 걸리나요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;배송일은 주문/결제일 기준 다음주 월요일에 일괄 배송되며, 일반택배 기간인 2~3일 정도가 보통 소요됩니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">포장</td>
                        <td>Q&nbsp;&nbsp;사료와 간식은 어떻게 포장되어 오나요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;사료와 간식은 포장봉투에 싸여서 배송됩니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content
            expand-icon="fas fa-caret-down"
            >
            <div slot="header">
                <table class="faq-table">
                    <tr>
                        <td class="category">구독</td>
                        <td>Q&nbsp;&nbsp;매번 결제를 해야하는건가요?</td>
                    </tr>
                </table>
            </div>
            <v-card class="answer-slot">
                <v-card-text>
                    A&nbsp;&nbsp;1회 구매의 경우 매번 결제를 하셔야합니다. 이것이 귀찮으시다면 정기구독(3개월, 6개월)을 선택하시면<br>매월초 자동결제가 되고 박스가 배송됩니다.
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <section class="suggest-btn-space">
            <v-btn class="suggest-btn" router to="/mypage/suggest" >상담하기</v-btn>
        </section>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../../assets/scss/Faq.scss'
</style>
