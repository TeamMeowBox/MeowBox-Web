<template>
    <div class="container" style="width:70vw; text-align:center">
        <birthday-detail v-if="flag === 1"></birthday-detail>
        <img v-else src="../assets/images/webtoon_img.png" alt="" style="width:50vw">
        <br><br>
        <v-btn class="birthday-info" @click="changeFlag()" >생일박스 상세보기</v-btn>
    </div>
</template>

<script>
import BirthdayDetail from '../components/Birthday/BirthdayDetail'
export default {
    data(){
        return{
            flag:-1
        }
    },
components:{
    BirthdayDetail
},
methods:{
    changeFlag(){
        this.flag = this.flag*-1;
    }
}


}
</script>

<style lang="scss">
@import '../assets/scss/Birthday.scss';

</style>
