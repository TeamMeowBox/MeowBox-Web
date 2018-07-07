<template>
    <div class="suggest-container">
        <h3>미유박스에 제안</h3>
        <section>
            <hr style="border-top:4px solid #e68789">
            <table class="suggestTable">
                <tr>
                    <td class="suggestTd" >
                        <h2>
                            미유박스에 대한<br>
                            의견을 보내주세요
                        </h2>
                    </td>
                    <td class="suggestTd2" >
                        <label for="suggestTitle" class="titleLabel">제목을 입력해주세요</label>
                        <v-text-field class="suggestTitle" type="text" placeholder="어떤 의견인가요?"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <td>일러스트?</td>
                    <td class="suggestTd2">
                        <label for="suggestContent" class="titleLabel" >자세히 알려주세요</label>
                        <br>
                        <br>
                        <v-textarea
                        solo
                        name="input-7-4"
                        label="Solo textarea"
                        v-model="etc"
                        placeholder="미유박스 이용 경험에 대해 알려주세요. 만족스러웠던 점과 개선해야 할 점을 알려주세요. 더 노력하는 미유박스가 될게요."
                        ></v-textarea>
                    </td>
                </tr>
            </table>
        </section>
        <aside class="suggestBtnSpace">
                <v-btn class="suggestBtn">제안하기</v-btn>
        </aside>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../../assets/scss/Suggest.scss';

</style>
