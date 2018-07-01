<template>
    <div class="container">
        <story-banner></story-banner>
        <what-is-meowbox></what-is-meowbox>
        <sensitive-cont></sensitive-cont>
    </div>
</template>

<script>
import StoryBanner from '../components/Story/StoryBanner'
import WhatIsMeowbox from '../components/Story/WhatIsMeowbox'
import SensitiveCont from '../components/Story/SensitiveCont'

export default {
    components: {
        StoryBanner,
        WhatIsMeowbox,
        SensitiveCont
    }    
}
</script>

<style>

</style>
