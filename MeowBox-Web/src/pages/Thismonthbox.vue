<template>
    <div class="container" style="width:70vw;">
        <base-info></base-info>
        <carousel></carousel>
    </div>
</template>

<script>
import BaseInfo from '../components/Thismonth/BaseInfo';
import Carousel from '../components/Thismonth/Carousel';
export default {
    components: {
        BaseInfo,
        Carousel
    }
}
</script>

<style lang="scss">
@import '../assets/scss/Thismonth.scss';
</style>
