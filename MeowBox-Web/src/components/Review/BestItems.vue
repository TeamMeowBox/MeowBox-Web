<template>
  <v-layout row wrap>
    <v-flex>
      <section class="this-month-birth" style="text-align:left">
        <h1>이달의 소중한 탄생</h1>
        <p>7월에 태어난 아이들을 함께 축하해줘요! 짝짝짝</p>
      </section>
      <section class="this-month-best" style="text-align:left">
        <h1>7월의 베스트 컷</h1>
        <p>트로피컬 나이트를 한껏 즐긴 아이들을 소개합니다.</p>
      </section>
      <section v-for="(item, index) in items" :key="index">
        <p>{{item.month}}월의 베스트</p>
        <p>{{item.description}}</p>
        <article v-for="(image, idx) in item.images" :key="idx" style="display: inline-block">
          <img :src="image.url" alt="" height="300" width="300">
          <p>{{image.instaNick}}</p>
          <p>{{image.instaId}}</p>
        </article>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BestItems',
  data () {
    return {
      items: [
        {
          month: 7,
          description: '점점 무더워지는 7월, 미유 박스를 통해 어쩌구',
          images: [
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/235f0c354475ab7f7f9c0e2bafb65fcc/5BDB00EB/t51.2885-15/s640x640/sh0.08/e35/30884486_214424729153578_7901523588686020608_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/e84e4fb1d4057feab0e82c1e57263292/5BDE5414/t51.2885-15/s640x640/sh0.08/e35/18889176_313343875786874_2034665817890619392_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            }
          ]
        },
        {
          month: 6,
          description: '점점 무더워지는 6월, 미유 박스를 통해 어쩌구',
          images: [
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/235f0c354475ab7f7f9c0e2bafb65fcc/5BDB00EB/t51.2885-15/s640x640/sh0.08/e35/30884486_214424729153578_7901523588686020608_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/e84e4fb1d4057feab0e82c1e57263292/5BDE5414/t51.2885-15/s640x640/sh0.08/e35/18889176_313343875786874_2034665817890619392_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            }
          ]
        },
        {
          month: 5,
          description: '점점 무더워지는 5월, 미유 박스를 통해 어쩌구',
          images: [
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/2e294fe57962f570adbd1f1913a119b3/5BE5461F/t51.2885-15/s640x640/sh0.08/e35/28435697_606407849704320_4774843541010513920_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/235f0c354475ab7f7f9c0e2bafb65fcc/5BDB00EB/t51.2885-15/s640x640/sh0.08/e35/30884486_214424729153578_7901523588686020608_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'https://scontent-icn1-1.cdninstagram.com/vp/e84e4fb1d4057feab0e82c1e57263292/5BDE5414/t51.2885-15/s640x640/sh0.08/e35/18889176_313343875786874_2034665817890619392_n.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            }
          ]
        }
      ]
    }
  }
}
</script>
