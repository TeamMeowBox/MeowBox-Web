<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <p>{{item.month}}월의 베스트</p>
      <p>{{item.description}}</p>
      <div v-for="(image, idx) in item.images" :key="idx">
        <img :src="image.url" alt="" height="200" width="200">
        <p>{{image.instaNick}}</p>
        <p>{{image.instaId}}</p>
      </div>
    </div>
  </div>
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
              url: 'http://img.newspim.com/news/2017/07/15/1707152207201160.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201701/16/img_20170116133834_e6e8975d.png',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/1125/IE002250825_STD.jpg',
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
              url: 'http://img.newspim.com/news/2017/07/15/1707152207201160.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201701/16/img_20170116133834_e6e8975d.png',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/1125/IE002250825_STD.jpg',
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
              url: 'http://img.newspim.com/news/2017/07/15/1707152207201160.jpg',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201701/16/img_20170116133834_e6e8975d.png',
              instaNick: '@냥냥이',
              instaId: '10000hyuk'
            },
            {
              url: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/1125/IE002250825_STD.jpg',
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
