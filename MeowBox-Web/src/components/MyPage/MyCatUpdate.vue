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
            <v-text-field class="catName" type="text" style="width:14vw" v-model="catInfo.name"></v-text-field>
          </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="catSize" style="color:#4c4e51">크기</label>
          </td>
              <td class="cat-size-table" colspan="2">
                    <div class="cat-size" >
                        <input id="small" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size" value="0"/> 조금 마른
                    </div>
                    <div class="cat-size">
                      <input id="middle" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size"  value="1"/> 보통
                    </div>
                    <div class="cat-size">
                      <input id="large" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size" value="2" /> 과체중
                    </div>
              </td>
        </tr>
        <tr>
          <td style="width:10rem; text-align:left">
            <label for="bdaytime" style="color:#4c4e51">생일</label>
          </td>
          <td colspan="2" class="cat-bday-table">
            <input type="date" name="bdaytime" v-model="catInfo.birthday">
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
              label="알레르기가 있는 재료나 좋아하는 재료에 대해 적어주세요."
              v-model="catInfo.caution"></v-textarea>
          </td>
        </tr>
      </table>
      <aside>
        <v-btn v-if="!checkCat" style="width:20vw; background:#e68789; color:white" @click="clickEdit">수정하기</v-btn>
        <v-btn v-else style="width:20vw; background:#e68789; color:white" @click="clickEdit">등록하기</v-btn>
      </aside>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios';

export default {
  name: 'MyCatUpdate',
  data() {
    return {
      catInfo: {
        name: null,
        size: null,
        birthday: null,
        caution: null
      }
    };
  },
  computed: {
    ...mapGetters([
      'userProfile',
      'catProfile'
    ]),
    checkCat() {
      // 등록된 고양이가 없을 경우
      console.log(this.catProfile);
      
      return this.catProfile === null || this.catProfile.cat_idx === -1
    }
  },
  methods: {
    ...mapActions([
      'registCatAction',
      'fetchCatAction',
      'updateCatAction'
    ]),
    async clickEdit() {
      try {
        let result;
        if (this.checkCat) { // 고양이 없는경우
          result = await this.registCatAction(this.catInfo);
          alert(result);
        } else {
          result = await this.updateCatAction(this.catInfo);
          alert(result);
        }
      } catch (e) {
        alert(e);
      }
    },
    async getCatData() {
      const result = await this.fetchCatAction();
      if (result.cat_idx === -1) { // 등록된 고양이가 없는경우
        alert('고양이없다')
      } else {
        this.catInfo.name = this.catProfile.name;
        this.catInfo.size = this.catProfile.size;
        this.catInfo.birthday = this.catProfile.birthday;
        this.catInfo.caution = this.catProfile.caution;
      }
    }
  },
  created() {
    this.getCatData();

  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/MyCatUpdate.scss';
</style>
