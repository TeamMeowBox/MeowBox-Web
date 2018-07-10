<template>
    <section style="text-align:right;">
        <template v-if="flag!==4">
            <span v-for="(category, index) in categorys" :key="index" style="font-size:1.2rem">
                <b v-if="category.cate_id===flag" style="color:#e68789">
                    {{category.numberCircle}}{{category.cateName}}&nbsp;&nbsp;
                </b>
                <template v-if="category.cate_id!==flag">
                    {{category.cateName}}&nbsp;
                </template>
            </span>
        </template>
    </section>
</template>

<script>
export default {
data(){
    return{
        categorys:[
                {cate_id : 0, cateName : '이름', numberCircle:'❶ '},
                {cate_id : 1, cateName : '기타', numberCircle:'❷ '},
                {cate_id : 2, cateName : '기간', numberCircle:'❸ '},
                {cate_id : 3, cateName : '결제', numberCircle:'❹ '}
            ]
    }
},


}
</script>

<style>
@import '../../assets/scss/Order.scss';

</style>
