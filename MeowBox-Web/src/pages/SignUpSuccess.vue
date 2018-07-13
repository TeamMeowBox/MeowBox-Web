<template>
    <div class="sign-up-success-cont container" style="width:70vw;text-align:center;">
        <sign-up-success-form></sign-up-success-form>
    </div>
</template>

<script>
import SignUpSuccessForm from '../components/SignUp/SignUpSuccess';
export default {
    name: 'SignUpSuccess',
  components: {
    SignUpSuccessForm
  }
}
</script>

<style lang="scss">
@import '../assets/scss/SignUp.scss';
</style>
