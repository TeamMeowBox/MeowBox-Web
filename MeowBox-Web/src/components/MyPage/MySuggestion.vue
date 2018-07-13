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
                        <v-text-field class="suggestTitle" type="text" placeholder="어떤 의견인가요?" v-model="suggestion.title"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td class="suggestTd2">
                        <label for="suggestContent" class="titleLabel" >자세히 알려주세요</label>
                        <br>
                        <br>
                        <v-textarea
                        solo
                        name="input-7-4"
                        label="Solo textarea"
                        v-model="suggestion.content"
                        placeholder="미유박스 이용 경험에 대해 알려주세요. 만족스러웠던 점과 개선해야 할 점을 알려주세요. 더 노력하는 미유박스가 될게요."></v-textarea>
                    </td>
                </tr>
            </table>
        </section>
        <aside class="suggestBtnSpace">
                <v-btn class="suggestBtn" @click="clickSuggest">제안하기</v-btn>
        </aside>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MySuggestion',
  data() {
    return {
      suggestion: {
        title: null,
        content: null
      }
    }
  },
  methods: {
    async clickSuggest() {
      this.suggestion.user_idx = localStorage.getItem('user_idx');

      try {
        const result = await axios.post('http://13.124.92.40:3000/mypage/feedback', this.suggestion, {headers: {authorization: localStorage.getItem('token')}});
        if (result.data.status) {
          alert('success');
        }
      } catch (e) {
        alert('failed');
      }
    }
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/Suggest.scss';

</style>
