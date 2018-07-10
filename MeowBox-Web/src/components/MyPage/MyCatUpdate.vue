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
                        <input id="small" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size" value="1"/> 조금 마른
                    </div>
                    <div class="cat-size">
                      <input id="middle" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size"  value="2"/> 보통
                    </div>
                    <div class="cat-size">
                      <input id="large" class="catSize" type="radio" name="accessible-radio" v-model="catInfo.size" value="3" /> 과체중
                    </div>
               </td>
                </tr>
                <tr>
                <td style="width:10rem; text-align:left">
                    <label for="bdaytime" style="color:#4c4e51">생일</label>
                </td>
                <td class="cat-bday-table" colspan="2">
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
                <v-btn style="width:20vw; background:#e68789; color:white" @click="clickEdit">수정하기</v-btn>
            </aside>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
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
      'userProfile'
    ])
  },
  methods: {
    async clickEdit() {
      try {
       var result
        if(localStorage.cat_idx==-1){
        result = await axios.post('http://13.209.220.1:3000/user/cat_signup', this.catInfo, {headers: {authorization: localStorage.getItem('token')}}); 
        localStorage.cat_idx = result.data.result.cat_idx
        
        }else{
         result = await axios.post('http://13.209.220.1:3000/mypage/account_setting/update_cat', this.catInfo, {headers: {authorization: localStorage.getItem('token')}});
       console.log('-------------');
       
       }
        console.log(result);
        
        if (result.data.status===true) {
          alert('success');
        }
      } catch (e) {
        alert('failed');
      }
    },
    init() {
      this.catInfo.name = this.userProfile.catName;
      this.catInfo.size = this.userProfile.size;
      this.catInfo.birthday = this.userProfile.birthday;
      this.catInfo.caution = this.userProfile.caution;
    }
  },
  created() {
              let headers = {headers: {
                             authorization: localStorage.token,
                             }}
    axios.get('http://13.209.220.1:3000/user/cat/'+localStorage.cat_idx,headers)
        .then(response => {
          if (response.data.status === true) {
            console.log(response);
            this.catInfo.name = response.data.result.name;
            this.catInfo.size = response.data.result.size;
            this.catInfo.birthday = response.data.result.birthday;
            this.catInfo.caution = response.data.result.caution;
          } else {
            alert('아이디,비밀번호를 ')
            
          }
        })
        .catch(e => {
          console.log(e);
          alert('아이디,비밀번호를 확인해주세요')
        })
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/MyCatUpdate.scss';
</style>
