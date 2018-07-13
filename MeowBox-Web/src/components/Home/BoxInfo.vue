<template>
  <div class="container">
    <div class="box_info" >
      <table style="margin:auto">
      <tr v-for="(item, index) in box_infos" :key="index">
        <td class="box-card" rowspan="2" >
          <v-card >
            <v-card-title primary-title>
              <div >
                <div class="box-title" >
                  <span ><pre>{{item.title}}</pre></span>
                </div>
              </div>
            </v-card-title>
            <div class="box-content" >
              <span ><pre>{{item.content}}</pre></span>
            </div>
            <v-card-media
              :src="item.src"
              height="30vh"
              width="100%"
              style="background-size:contain;"
            >
            </v-card-media>
          </v-card>
        </td>
      </tr>
    </table>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'BoxInfo',
  data() {
    return {
      box_infos: [
        {title : "열두번의\n특별함을\n드려요", content: "고양이의 변신은 무죄! 저희가 내 고양이의\n'초면'을 찾아드립니다. 매일 보던 우리 아이의\n새로운 모습, 궁금하지 않나요?", src:require('@/assets/images/home/home_card_img_1.png')},
        {title : "집사의 부담,\n미유박스가\n덜어드려요", content: "장난감, 용품, 특별한 간식까지.\n6만원 상당의 구성을 35,000원에,\n거품은 빼고 행복만 가득 채워 준비했어요.", src:require('@/assets/images/home/home_card_img_2.png')},
        {title : "내 고양이에게\n딱 맞는 간식", content: "못 먹는 음식이 있다면 알려주세요!\n우리 아이 입맛을 저격하는\n수의사가 직접 영양소를 검토해 건강한 간식\n만 엄선합니다.", src:require('@/assets/images/home/home_card_img_3.png')},
        {title : "상자까지\n선물인\n미유박스", content: "스크래쳐+박스를 한번에, 상자까지\n선물인 미유박스!\n내 고양이의 최애 공간이 될 거예요.", src:require('@/assets/images/home/home_card_img_4.png')}
      ]
    };
  }
}
</script>

<style>
</style>
