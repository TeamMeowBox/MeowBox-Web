<template>
    <div class="carousel-container">
      <div class="content-title">
        <table style="margin:auto;">
          <tr>
            <td style="padding-left:2rem">
              <img src="../../assets/images/thismonthbox/sunglass_one_img.png" alt="" style="width:15vw">
            </td>
            <td style="width:20vw; height:20vh; padding-left:3rem; padding-bottom:1rem;">
              <hr class="carousel-hr">
              <p class="title">선글라스 & 모자</p><br>
              <span class="content">
                2018 S/S 피서룩의 완성. 선글라스와<br>모자만 있으면, 이구역 힙냥이는 나야!
              </span>
            </td>
          </tr>
        </table>
      </div>
      <div class="carousel-cont" style="display:block; margin-top:2rem;">
        <v-carousel hide-delimiters style="width:50vw; margin:auto; display:table;">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            >
            <div style="background:white; vertical-align:bottom; display:table-cell;">
              <p>test</p>
            </div>
            </v-carousel-item>
        </v-carousel>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.content-title {
    background: url('../../assets/images/thismonthbox/this_box_detail_background.png') no-repeat;
    width:100%;
    height:30vh;
    background-size:contain;
    vertical-align: middle;
}
</style>
