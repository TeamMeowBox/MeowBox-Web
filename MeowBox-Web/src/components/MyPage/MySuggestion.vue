<template>
    <div>
        <h3>미유박스에 제안</h3>
        <section>
            <hr style="border-top:4px solid #e68789">
            <table style="margin:0 auto; width:100%;">
                <tr>
                    <td style="width:10vw">
                        <h3>
                            미유박스에 대한<br>
                            의견을 보내주세요
                        </h3>
                    </td>
                    <td style="width:35vw">
                        <label for="suggestTitle" style="color:#4c4e51">제목을 입력해주세요</label>
                        <v-text-field class="suggestTitle" type="text" style="width:14vw; vertical-align:middle" placeholder="어떤 의견인가요?"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <td>일러스트?</td>
                    <td>
                        <label for="suggestContent" style="color:#4c4e51">자세히 알려주세요</label>
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
        <aside>
                <v-btn style="width:20vw; background:#e68789; color:white">제안하기</v-btn>
        </aside>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
