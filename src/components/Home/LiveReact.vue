<template>
        <article class="live-react">
            <section class="container live-react-title" style="text-align:center">
                <p>이번 달 미유박스는</p>
                <p>3,800냥이 를 만났어요!</p>
            </section>
            <section class="container live-react-instas" style="text-align:center">
                <p>여기에 인스타 크롤링 리스트</p>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 v-for="(item, index) in items" :key="index">
                        <v-card>
                            <v-card-title primary-title>
                                <div>
                                    <div>{{item.writer}}</div>
                                </div>
                            </v-card-title>
                            <v-card-media
                            :src="item.url"
                            height="200px"
                            ></v-card-media>
                            <v-card-actions>
                            <v-btn flat color="pink"><i class="fas fa-heart"></i></v-btn>
                            <v-btn flat color="pink"><i class="fas fa-comment"></i></v-btn>
                            <v-btn flat color="pink"><i class="fas fa-bookmark"></i></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

            </section>
        </article>
</template>

<script>
export default {
    name:'LiveReacts',
    data() {
        return {
            items : [{
                writer: 'test1',
                url: 'http://geniusvets.s3.amazonaws.com/gv-blog/2017/08-cat-cancer-1.jpg'
            },
            {
                writer: 'test2',
                url: 'http://geniusvets.s3.amazonaws.com/gv-blog/2017/08-cat-cancer-1.jpg'
            },
            {
                writer: 'test3',
                url: 'http://geniusvets.s3.amazonaws.com/gv-blog/2017/08-cat-cancer-1.jpg'
            },
            {
                writer: 'test4',
                url: 'http://geniusvets.s3.amazonaws.com/gv-blog/2017/08-cat-cancer-1.jpg'
            }
            ]
        }
    }
}
</script>

<style>

</style>
