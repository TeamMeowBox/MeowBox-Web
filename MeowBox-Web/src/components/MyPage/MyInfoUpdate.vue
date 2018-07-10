<template>
    <div>
        <h3 class="title">개인정보수정</h3>
        <hr class="section-divide">
        <section class="my-info-container">
            <table style="margin:0 auto; width:100%;">
                <tr>
                    <td class="cate-td">
                        <label for="name">이름</label>
                    </td>
                    <td>
                        <v-text-field class="name" v-model="name"></v-text-field>
                    </td>
                    <td>
                        <small class="more-info">영문 소문자/영문 소문자 + 숫자, 4-16자</small>
                    </td>
                </tr>
                <tr>
                    <td class="cate-td">
                        <label for="password">비밀번호</label>
                    </td>
                    <td>
                        <v-text-field class="password" type="password" v-model="pwd"></v-text-field>
                    </td>
                    <td>
                        <small class="more-info">10~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용할 수 있습니다</small>
                    </td>
                </tr>
                <tr>
                    <td class="cate-td">
                        <label for="passwordConfirm">비밀번호 확인</label>
                    </td>
                    <td>
                        <v-text-field class="passwordConfirm" type="password"></v-text-field>
                    </td>
                    <td style="width:40vw;">
                        <small class="more-info">비밀번호를 다시 한 번 입력주세요</small>
                    </td>
                </tr>
                <tr>
                    <td class="cate-td">
                        <label for="phone">휴대전화</label>
                    </td>
                    <td colspan="2">
                        <v-text-field class="phone" type="number" v-model="phone"/>
                    </td>
                </tr>
                <tr>
                    <td class="cate-td">
                        <label for="profile-img">프로필 이미지</label>
                    </td>
                    <td colspan="2" style="text-align:left;">
                        <div class="img-upload-cont">
                            <table>
                                <tr>
                                    <td>
                                        <div class="dropbox" v-if="!img">
                                            <input
                                                type="file"
                                                class="input-image"
                                                :multiple="false"
                                                @change="onFileChange"
                                                accept="image/*">
                                        </div>
                                        <img class="my_image" :src="img" v-if="img" alt="">
                                    </td>
                                    <td>
                                        <v-btn class="updateProfileBtn">이미지 업로드</v-btn>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table> 
            <aside class="btn-space">
                <v-btn class="updateBtn" @click="updateUserInfo()">수정하기</v-btn>
            </aside>
        </section>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      img: '',
      user_idx: '',
      phone: '',
      name: '',
      email: '',
      file: '',
      pwd: ''
    }
  },
  created() {
    let headers = {
      headers: {
        authorization: localStorage.token,
      }
    }

    axios.get('http://13.209.220.1:3000/mypage/account_setting/account/', headers)
      .then(response => {
        if (response.data.status === true) {
          console.log(response);
          this.name = response.data.result.user_name;
          this.phone = response.data.result.phone_number;
          this.img = response.data.result.image_profile;
          this.email = response.data.result.email;


        } else {
          alert('아이디,비밀번호를 ')

        }
      })
      .catch(e => {
        console.log(e);
        alert('아이디,비밀번호를 확인해주세요')
      })
  },
  computed: {},
  methods: {
    ...mapActions([
      'editUserProfile'
    ]),
    onFileChange(event) {
      if (event.target.files[0]['type'].split('/')[0] === 'image') {
        this.file = event.target.files[0]

        this.getImage(this.file);
      }
    },
    getImage(file) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        this.img = fileReader.result

      }
      fileReader.readAsDataURL(file)
    },
    async updateUserInfo() {


      let headers = {
        headers: {
          authorization: localStorage.token,
        }
      }
      let data = new FormData();

      data.append('user_name', this.name)
      data.append('user_phone', this.phone)
      if (this.file !== '') {
        data.append('image_profile', this.file)
      }
      data.append('pwd', this.pwd)

      // console.log(data.get('image_profile'));


      // try {
      //   const result = await this.editUserProfile(data);
      //
      //   if (result) {
      //     this.name = result.user_name;
      //     this.phone_number = result.phone_number
      //   } else {
      //     alert('아이디,비밀번호를 ');
      //   }
      // } catch (e) {
      //   alert(e);
      // }


      axios.post('http://13.209.220.1:3000/mypage/account_setting/update_user', data, headers)
        .then(response => {
          console.log(response);
          if (response.data.status === true) {
            console.log(response);
            this.name = response.data.result.user_name;
            this.phone=response.data.result.phone_number;
            this.img="";
            // this.img = response.data.result.image_profile;
            this.email = response.data.result.email;
          } else {
            alert('아이디,비밀번호를 ')
          }
        })
        .catch(e => {
          console.log('myinfoupdate', e);
          alert('아이디,비밀번호를 확인해주세요')
        })


    },
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/MyInfoUpdate.scss';
    .dropbox{
//  background-color: grey;
    background: url('../../assets/images/camera.png') no-repeat ;
    background-size:contain;
    min-width:10vw;
    min-height:10vh;
}
.dropbox p{
    text-align: center;
    line-height: 20vh;
}
.input-image{
    opacity: 0;
    width: 15vw;
    height: 20vh;
}
.my_image{
    width:10rem;
    height:10rem;
    }
</style>
