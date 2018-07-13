<template>
    <div class="carousel-container">
      <div v-for="(prod, i) in thisMonthItems" :key="i" style="margin-top:8rem;">
        <div class="content-title">
          <table style="margin:auto;">
            <tr>
              <td style="padding-left:2rem">
                <img :src="prod.src" alt="" style="width:13vw">
              </td>
              <td style="width:20vw; height:20vh; padding-left:3rem; padding-bottom:1rem;">
                <hr class="carousel-hr">
                <p class="title">{{prod.product}}</p><br>
                <span class="content">
                  <pre>{{prod.detail}}</pre>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="carousel-cont" style="display:block; margin-top:1rem;">
          <v-carousel hide-delimiters style="width:100%; margin:auto; position:relative;">
              <v-carousel-item
              v-for="(item,i) in prod.items"
              :key="i"
              :src="item.src"
              >
              <div style="background:rgba(255,255,255,0.7); position:absolute; bottom:0px; width:100%; text-align:center; padding:1rem 0 1rem 0">
                <span style="font-weight:bold">{{item.content}}</span>
              </div>
              </v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <br>
      <div style="text-align:center">
        <v-btn class="meow-btn" router to="/order">미유박스 주문하기</v-btn>
      </div>
      </div>
</template>

<script>
  export default {
    data () {
      return {
        thisMonthItems : [
          {
            product: '선글라스 & 모자',
            detail: '2018 S/S 피서룩의 완성. 선글라스와\n모자만 있으면, 이구역 힙냥이는 나야!',
            src:require('@/assets/images/thismonthbox/sunglass_one_img.png'),
            items: [
              {
                src: require('@/assets/images/thismonthbox/sunglass_two_img.png'),
                content: '2018 S/S 피서룩의 완성. 선글라스와 모자만 있으면, 이구역 힙냥이는 나야!'
              },
              {
                src: require('@/assets/images/thismonthbox/sunglass_three_img.png'),
                content: '마음대로 길이조절이 가능한 밀짚모자! 우리 냥이에게 딱 맞게 씌워주세요.'
              },
              {
                src: require('@/assets/images/thismonthbox/sunglass_four_img.png'),
                content: '볼수록 더 귀여운 밀짚모자와 선글라스. 냥이에게 멋진 피서를 선물하는 법, 어렵지 않아요!'
              }
            ]
          },
          {
            product: '장난감',
            detail: '보기만 해도 시원해! 냥이가 씹고 뜯고\n맛보고 즐길 올여름 최애 인형',
            src:require('@/assets/images/thismonthbox/toy_one_img.png'),
            items: [
              {
                src: require('@/assets/images/thismonthbox/toy_two_img.png'),
                content: '보기만 해도 시원해! 냥이가 씹고 뜯고 맛보고 즐길 올여름 최애 인형'
              },
              {
                src: require('@/assets/images/thismonthbox/toy_three_img.png'),
                content: '세상 부드러운 양모볼에 캣닢가루를 솔솔~ 하루 종일 갖고 놀아도 질리지 않아요.'
              },
              {
                src: require('@/assets/images/thismonthbox/toy_four_img.png'),
                content: '냥이와 케미 폭발할 아기자기한 인형, 가지고 놀기 딱 좋은 사이즈로 만들었어요.'
              }
            ]
          },
          {
            product: '낚시대',
            detail: '숨어있던 사냥본능을 깨워라!\n자유자재 길이조절로 늘 새로운 3단 낚시대',
            src:require('@/assets/images/thismonthbox/fishing_rod_one_img.png'),
            items: [
              {
                src: require('@/assets/images/thismonthbox/fishing_rod_two_img.png'),
                content: '숨어있던 사냥본능을 깨워라! 자유자재 길이조절로 늘 새로운 3단 낚시대'
              },
              {
                src: require('@/assets/images/thismonthbox/fishing_rod_three_img.png'),
                content: '길고 부드러운 깃털과 방울 소리로 냥이의 사냥본능을 자극해요.'
              },
              {
                src: require('@/assets/images/thismonthbox/fishing_rod_four_img.png'),
                content: '엉키지 않는 긴 낚시줄과 길이 조절이 가능한 낚시대로 더 재밌고 편하게 놀아줄 수 있어요.'
              }
            ]
          },
          {
            product: '스크래쳐',
            detail: '스트레스를 해소해 줄 스크래쳐.\n한 번 긁으면, 멈출 수 없을 걸?',
            src:require('@/assets/images/thismonthbox/scratcher_one_img.png'),
            items: [
              {
                src: require('@/assets/images/thismonthbox/scratcher_two_img.png'),
                content: '스트레스를 해소해 줄 스크래쳐. 한 번 긁으면, 멈출 수 없을 걸?'
              },
              {
                src: require('@/assets/images/thismonthbox/scratcher_three_img.png'),
                content: '냥이가 스트레소를 해소하고, 발톱을 정리할 스크래쳐. 마음껏 긁어주세요!'
              },
              {
                src: require('@/assets/images/thismonthbox/scratcher_four_img.png'),
                content: '미유박스와 딱 맞는 크기의 스크래쳐, 합체하면 아늑한 냥이만의 공간 완성!'
              }
            ]
          },
          {
            product: '간식',
            detail: '영양소를 그대로 담은 동결건조 닭가슴살,\n맛과 건강 둘 다 놓치지 않을 거예요!',
            src:require('@/assets/images/thismonthbox/snack_one_img.png'),
            items: [
              {
                src: require('@/assets/images/thismonthbox/snack_two_img.png'),
                content: '영양소를 그대로 담은 동결건조 닭가슴살, 맛과 건강 둘 다 놓치지 않을 거예요!'
              },
              {
                src: require('@/assets/images/thismonthbox/snack_three_img.png'),
                content: '까다로운 냥이도 무너뜨릴 향기, 갈매기살을 갈아 만들어 말랑한 식감의 포크 져키'
              },
              {
                src: require('@/assets/images/thismonthbox/snack_four_img.png'),
                content: '미유가 만들고 수의사가 검사한 믿음직한 수제 간식. 영양소와 기호성 또한 최고!'
              }
            ]
          }

        ]
      }
    }
  }
</script>

<style lang="scss">
.content-title {
    background: url('../../assets/images/thismonthbox/this_box_detail_background@2x.png') no-repeat;
    width:100%;
    height:30vh;
    background-size:contain;
    vertical-align: middle;
}
</style>
