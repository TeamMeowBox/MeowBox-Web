<template>
    <div>
        <h3>개인정보수정</h3>
        <hr style="border-top:4px solid #e68789;">
        <section style="text-align:center">
            <table style="margin:0 auto; width:100%;">
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="email" style="color:#4c4e51">이메일</label><br>
                    <small>(아이디)</small>
                </td>
                <td colspan="2">
                    <v-text-field class="email" type="email" style="width:14vw"></v-text-field>
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="password" style="color:#4c4e51">비밀번호</label>
                </td>
                <td>
                    <v-text-field class="password" type="password" style="width:14vw"></v-text-field>
                </td>
                <td>
                    <small style="float:left">10~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용할 수 있습니다</small>
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="passwordConfirm" style="color:#4c4e51">비밀번호 확인</label>
                </td>
                <td>
                    <v-text-field class="passwordConfirm" type="password" style="width:14vw; vertical-align:middle"></v-text-field>
                </td>
                <td style="width:40vw;">
                    <small style="float:left">비밀번호를 다시 한 번 입력주세요</small>
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="name" style="color:#4c4e51">이름</label>
                </td>
                <td>
                    <v-text-field class="name" style="width:14vw"></v-text-field>
                </td>
                <td>
                    <small style="float:left">영문 소문자/영문 소문자 + 숫자, 4-16자</small>
                </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="phone" style="color:#4c4e51">휴대전화</label>
                </td>
                <td colspan="2">
                    <v-text-field class="phone" type="number" style="width:14vw"></v-text-field>
                </td>
                </tr>
            </table>
        </section>
        <hr style="border-top:4px solid #e68789;">
        <section>
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
                    <input id="small" class="catSize" type="radio" name="accessible-radio" checked="checked" v-model="size" value="small"/> 조금 마른
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
                <v-btn style="width:20vw; background:#e68789; color:white">탈퇴하기</v-btn>
                <v-btn style="width:20vw; background:#e68789; color:white">수정하기</v-btn>
            </aside>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
