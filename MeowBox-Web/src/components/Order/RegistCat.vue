<template>
  <div>
    <section class='name' v-if="getFlag ===0">
      <aside>
        {{this.$store.getters.getFlag}}
        <p class="catInputTitle">반려묘의<br><b>이름</b>은 무엇인가요?
          <small>필수항목(*)은 꼭 입력해주세요.</small>
        </p>
        <p>이름<span class="star">*</span></p>
        <v-text-field class="catName" v-model="cat.name" placeholder="반려묘 이름" required/>
      </aside>
    </section>
    <section class='etc' v-if="getFlag ===1">
      <aside>
        <p class="catInputTitle"><b>(여기에 반려동물 이름)</b>에 대해<br>더 자세히 알려주세요!
          <small>필수항목(*)은 꼭 입력해주세요.</small>
        </p>
      </aside>
      <aside class="size">
        <p>체형<span class="star">*</span></p>
        <input id="small" class="radio-inline__input" type="radio" name="accessible-radio" checked="checked"
               v-model="cat.size" value='0'/>
        <label class="radio-inline__label" for="small">
          <v-card>
            <img src="../../assets/images/small-cat-img.png" alt=""/>
            <v-card-title primary-title>
              <div>
                <h5 class="headline mb-0">조금 마른</h5>
                <div>먼치킨 종 부터<br>몸무게가 1-2kg 인 고양이</div>
              </div>
            </v-card-title>
          </v-card>
        </label>
        <input id="middle" class="radio-inline__input" type="radio" name="accessible-radio" v-model="cat.size"
               value='1'/>
        <label class="radio-inline__label" for="middle">
          <v-card>
            <img src="../../assets/images/medium-cat-img.png" alt=""/>
            <v-card-title primary-title>
              <div>
                <h5 class="headline mb-0">보통</h5>
                <div>일반적인 무게<br>몸무게가 2-4kg인 고양이</div>
              </div>
            </v-card-title>
          </v-card>
        </label>
        <input id="large" class="radio-inline__input" type="radio" name="accessible-radio" v-model="cat.size"
               value='2'/>
        <label class="radio-inline__label" for="large">
          <v-card>
            <img src="../../assets/images/large-cat-img.png" alt=""/>
            <v-card-title primary-title>
              <div>
                <h5 class="headline mb-0">과체중</h5>
                <div>비만이거나 몸집이 큼<br>몸무게가 5kg 이상인 고양이</div>
              </div>
            </v-card-title>
          </v-card>
        </label>
      </aside>
      <br/>
      <br/>
      <aside>
        <p>생일<span class="star">*</span></p>
        <input type="date" name="bdaytime" v-model="cat.birthday">
      </aside>
      <br/>
      <br/>
      <aside>
        <p>알레르기 및 특이사항</p>
        <v-textarea
          solo
          name="input-7-4"
          v-model="cat.caution"
          label="알레르기가 있는 재료나 좋아하는 재료에 대해 적어주세요."
        ></v-textarea>
      </aside>
    </section>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'RegistCat',
  data() {
    return {
      cat: {
        name: '',
        size: '',
        caution: '',
        birthday: '',
        flag: ''
      }
    }
  },
  computed: {
    getFlag() {

      if (this.$store.getters.getFlag === 2 && localStorage.cat_idx !== -1) {
        this.$store.dispatch('registCatAction', this.cat)
      }
      return this.$store.getters.getFlag;
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/Order.scss';

</style>

