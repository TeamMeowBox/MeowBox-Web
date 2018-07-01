<template>
    <div>
        <main-info></main-info>
        <live-reacts></live-reacts>
        <what-is-meowbox></what-is-meowbox>
        <this-month-info></this-month-info>
        <footer-start></footer-start>
    </div>
</template>

<script>
import LiveReacts from '../components/Home/LiveReact'
import MainInfo from '../components/Home/MainInfo'
import WhatIsMeowbox from '../components/Home/WhatIsMeowbox'
import ThisMonthInfo from '../components/Home/ThisMonthInfo'
import FooterStart from '../components/Home/FooterStart'

export default {
    name: 'Home', 
    components: {
        LiveReacts,
        MainInfo,
        WhatIsMeowbox,
        ThisMonthInfo,
        FooterStart
    }
}
</script>

<style>

</style>
