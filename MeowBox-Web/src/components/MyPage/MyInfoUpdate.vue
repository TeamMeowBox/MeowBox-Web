<template>
  <div xs12 sm6 md4 lg3>
    <h3 class="title">개인정보수정</h3>
    <hr class="section-divide">
    <section class="my-info-container">
      <table style="margin:0 auto; width:48vw;">
          <tr>
          <td class="cate-td">
            <label for="profile-img">프로필 이미지</label>
          </td>
          <td colspan="2" style="text-align:left;">
            <div class="img-upload-cont">
              <table>
                <tr>
                  <td>
                    <div class="dropbox" v-if="!img" style="border-radius:50px; width:100px; height:100px">
                      <input
                        type="file"
                        class="input-image"
                        :multiple="false"
                        @change="onFileChange"
                        accept="image/*"
                        style="border-radius:50px; width:100px; height:100px">
                    </div>
                    <img class="my_image" :src="img" v-if="img" alt="" style="border-radius:80px; width:100px; height:100px"><br>
                    <v-btn class="updateProfileBtn" @click="removeImg()"><i class="fas fa-trash-alt"></i></v-btn>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

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
            <label for="phone">휴대전화</label>
          </td>
          <td colspan="2">
            <v-text-field class="phone" type="text" v-model="phone"/>
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
    computed: {
      ...mapGetters([
        'userProfile'
      ])
    },
    methods: {
      ...mapActions([
        'editUserProfile',
        'fetchUserProfile'
      ]),
      removeImg() {
        this.img = ''
      },
      onFileChange(event) {
        if (event.target.files[0]['type'].split('/')[0] === 'image') {
          this.file = event.target.files[0];

          this.getImage(this.file);
        }
      },
      getImage(file) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.img = fileReader.result
        };

        fileReader.readAsDataURL(file)
      },
      async updateUserInfo() {

        let result;
        try {

          const data = new FormData();
          data.append('name', this.name);
          data.append('phone_number', this.phone);
          if (this.file !== '') {
            data.append('image_profile', this.file);
          }

          result = await this.editUserProfile(data);

        } catch (e) {
          alert(e);
        }

        result ? alert('변경 성공') : alert('변경 실패');

        await this.fetchUserProfile();
      },
      async init() {
        const result = await this.fetchUserProfile();
        // this.phone = this.userProfile.phoneNumber;
        // this.name = this.userProfile.userName;
        this.phone = result.phone_number;
        this.name = result.user_name;
        this.img = result.image_profile;
      }
    },
    created() {
      this.init();
    },
  }
</script>

<style lang="scss">
  @import '../../assets/scss/MyInfoUpdate.scss';

  .dropbox {
    //  background-color: grey;
    background: url('../../assets/images/camera_default.png') no-repeat;
    background-size: contain;
    min-width: 10vw;
    min-height: 10vh;
  }

  .dropbox p {
    text-align: center;
    line-height: 20vh;
  }

  .input-image {
    opacity: 0;
    width: 15vw;
    height: 20vh;
  }

  .my_image {
    width: 10rem;
    height: 10rem;
  }
</style>
