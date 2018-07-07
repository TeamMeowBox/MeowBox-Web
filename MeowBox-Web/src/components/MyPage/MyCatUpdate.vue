<template>
    <div class="cat-info-update" style="width:48vw">
        <h3 class="title">고양이정보수정</h3>
        <hr style="border-top:4px solid #e68789;">
        <section style="text-align:center">
            <table style="margin:0 auto; width:100%;">
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="catName" style="color:#4c4e51">고양이 이름</label><br>
                </td>
                <td colspan="2">
                    <v-text-field class="catName" type="text" style="width:14vw"></v-text-field>
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="catSize" style="color:#4c4e51">크기</label>
                </td>
                <td colspan="2">
                    <div class="cat-size" >
                        <input id="small" class="catSize" type="radio" name="accessible-radio" checked="checked" v-model="size" value="small"/> 조금 마른
                    </div>
                    <input id="middle" class="catSize" type="radio" name="accessible-radio" v-model="size"  value="middle"/> 보통
                    <input id="large" class="catSize" type="radio" name="accessible-radio" v-model="size" value="large" /> 과체중
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="bdaytime" style="color:#4c4e51">생일</label>
                </td>
                <td colspan="2">
                    <input type="date" name="bdaytime" v-model="birth">
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="name" style="color:#4c4e51">알레르기 및 특이사항</label>
                </td>
                <td colspan="2">
                    <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
                v-model="etc"
                ></v-textarea>
                </td>
                </tr>
            </table>
            <aside>
                <v-btn style="width:20vw; background:#e68789; color:white">수정하기</v-btn>
            </aside>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../../assets/scss/MyCatUpdate.scss'
</style>
