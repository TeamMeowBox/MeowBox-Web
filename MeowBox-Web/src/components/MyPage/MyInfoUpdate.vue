<template>
    <div>
        <div class="dropbox" v-if="!img">
                            <input type="file" class="input-image" :multiple="false" @change="onFileChange" accept="image/*">
                            <p>이미지를 넣어주세요</p>
                            </div>
        <img class="my_image" :src="img" v-if="img" alt="">
        <h3 class="title">개인정보수정</h3>
        <hr class="section-divide">
        <section class="my-info-container">
            <table style="margin:0 auto; width:100%;">
                <tr>
                <!-- <td class="cate-td">
                    <label for="email">이메일</label><br>
                    <small>(아이디)</small>
                </td> -->
                <!-- <td colspan="2" >
                    <v-text-field class="email-id" type="text" v-model="user_idx"/> @ <v-text-field class="email-domain" type="text"  />
                </td> -->
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
                    <label for="name">이름</label>
                </td>
                <td>
                    <v-text-field class="name" v-model="name" ></v-text-field>
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
                    <v-text-field class="name" type="text" v-model="phone"/>
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
export default {
    data(){
        return{
        img:'',
        user_idx:'',
        phone:[],
        name:'',
        email:'',
        file:'',
        pwd:''
        }
    },
    created() {
            let headers = {headers: {
                             authorization: localStorage.token,
                             }}
           
    axios.get('http://13.209.220.1:3000/mypage/account_setting/account/'+localStorage.user_idx,headers)
        .then(response => {
          if (response.data.status === true) {
            console.log(response);
            this.name = response.data.result.user_name;
            this.phone[0]=response.data.result.phone_number;
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
methods: {
            onUploadBoard (){
                const data = new FormData()
                data.append('user_idx', localStorage.user_idx)
                data.append('board_title', this.title)
                data.append('board_content', this.description)
                data.append('photo', this.file)
                
                this.$store.dispatch('writeBoard', data)
              },
              onFileChange (event) {
                  if(event.target.files[0]['type'].split('/')[0] === 'image') {
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
              updateUserInfo(){
                          let headers = {headers: {
                             authorization: localStorage.token,
                             }}


                let data = new FormData()
            
                data.append('user_name', this.name)
                data.append('user_phone', this.phone)
                if(this.file !==''){
                    data.append('image_profile', this.file)    
                }
                data.append('pwd',this.pwd)
                
                console.log(data.get('image_profile'));
                
    axios.post('http://13.209.220.1:3000/mypage/account_setting/update_user',data,headers)
        .then(response => {
                   console.log(response);
     
     if (response.data.status === true) {
            console.log(response);
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
}
</script>

<style lang="scss">
    @import '../../assets/scss/MyInfoUpdate.scss';
    .dropbox{
 background-color: grey;
 outline: 2px dashed grey;
 min-height: 200px;
}
.dropbox p{
    text-align: center;
    line-height: 200px;
}
.input-image{
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
}
.my_image{
     width: 70%;
    height: 200px;
}
</style>
