<template>
    <div class="container" style="width:70vw;">
        <base-info></base-info>
        <detail-info></detail-info>
        <carousel></carousel>
    </div>
</template>

<script>
import BaseInfo from '../components/Thismonth/BaseInfo';
import DetailInfo from '../components/Thismonth/DetailInfo';
import Carousel from '../components/Thismonth/Carousel';
export default {
    components: {
        BaseInfo,
        DetailInfo,
        Carousel
    }
}
</script>

<style>

</style>
