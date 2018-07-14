<template>
    <div>
        <div class="birth-base-info">
            <div class="birth-start-info">
            </div>
            <div class="birth-content-info">
                <p>생일 축하해! 박스</p>
                <span>하나뿐인 나의 냥이에게 생일파티를!<br>미유박스가 함께 축하해드려요</span>
            </div>
        </div>
    <div class="birth-carousel-container">
      <div v-for="(prod, i) in birthDetailItems" :key="i" style="margin-top:8rem;">
        <div class="birth-content-title">
          <table style="margin:auto; text-align:left; padding-top:1rem">
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
    </div>
</template>
<script>
  export default {
    data () {
      return {
        birthDetailItems : [
          {
            product: '꼬깔모자 & 리본타이',
            detail: '생일 축하해요! 이 모자와 리본을 착용한\n순간, 오늘의 주인공은 바로 당신!',
            src:require('@/assets/images/birthdetail/ribbon_one_img.png'),
            items: [
              {
                src: require('@/assets/images/birthdetail/ribbon_two_img.png'),
                content: '생일 축하해요! 이 모자와 리본을 착용한 순간, 오늘의 주인공은 바로 당신!'
              },
              {
                src: require('@/assets/images/birthdetail/ribbon_three_img.png'),
                content: '귀여운 금색 고깔모자와 리본타이는 당신의 고양이의 품격을 올려줄 거예요.'
              },
              {
                src: require('@/assets/images/birthdetail/ribbon_four_img.png'),
                content: '두 제품 모두 조절 끈이 있어, 우리 냥이에게 꼭 맞게 착용할 수 있어요.'
              }
            ]
          },
          {
            product: '케이크 & 가랜드',
            detail: '함께 기뻐하기를 바라는 마음을 담아\n만든, 냥이가 먹을 수 있는 특별한 케이크',
            src:require('@/assets/images/birthdetail/cake_one_img.png'),
            items: [
              {
                src: require('@/assets/images/birthdetail/cake_two_img.png'),
                content: '함께 기뻐하기를 바라는 마음을 담아 만든, 냥이가 먹을 수 있는 특별한 케이크'
              },
              {
                src: require('@/assets/images/birthdetail/cake_three_img.png'),
                content: '우리 냥이만을 위한 맞춤 가랜드로 더욱 특별한 추억을 남겨보세요.'
              },
              {
                src: require('@/assets/images/birthdetail/cake_four_img.png'),
                content: '일 년에 한 번, 특별한 우리만의 날을 기념할 케이크와 가랜드!'
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
.birth-start-info {
    background: url('../../assets/images/birthdetail/birthday_detail_main.png') no-repeat;
    width:100%;
    height:70vh;
    background-position: center;
    background-size:contain;
    vertical-align: middle;
}
.birth-content-title {
    background: url('../../assets/images/birthdetail/birthday_detail_background.png') no-repeat;
    width:100%;
    height:30vh;
    background-size:contain;
    vertical-align: middle;
}

</style>
