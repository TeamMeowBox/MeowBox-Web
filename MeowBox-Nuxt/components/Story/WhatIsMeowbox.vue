<template>
    <article class="container what-is-meowbox">
        <section class="what-is-title">
            <h2>
                미유박스란?
            </h2>
        </section>
        <section class="what-is-content">
            <p>미유박스는 고양이에게 필요한 용품과 간식을 담은 박스를 정기적으로
                <br>배송해주는 서비스입니다.<br>나의 고양이를 생각하는 모든 집사들의 마음을 담은 박스입니다.</p>
        </section>
        <section class="what-is-img">
            <div v-for="(image, idx) in images" :key="idx" style="display:inline-block">
                <img :src="image.url" alt="" height="200" width="200" style="border-radius:100px">
            </div>
        </section>
    </article>
</template>
<script>
export default {
    name: 'WhatIsMeowbox',
    data() {
        return {
            images: [
                {
                    url: 'https://cattoyshq.com/wp-content/uploads/2017/08/cat-playing-with-toy.jpg'
                },
                {
                    url: 'https://cattoyshq.com/wp-content/uploads/2017/08/cat-playing-with-toy.jpg'
                },
                {
                    url: 'https://cattoyshq.com/wp-content/uploads/2017/08/cat-playing-with-toy.jpg'
                }
            ]
        }
    }
}
</script>

<style>

</style>
