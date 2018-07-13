<template>
    <article class="main" style=" text-align:right; display:table">
        <section class="love_info_sec" style="display:table-cell; vertical-align:middle">
            <span class="love_info">사랑한다면</span><br/>
            <span class="love_info">미유박스하세요</span><br/><br/>
            <v-btn class="meow_start" router to="/order">미유박스 시작</v-btn>
        </section>
    </article>
</template>

<script>
export default {
  name: 'MainInfo',

}
</script>

<style lang="scss">
.main {
    background: url("../../assets/images/home/meow_home_background.jpeg") no-repeat;
    background-size:cover;
    height:80vh;
    width:100%;
}
</style>

