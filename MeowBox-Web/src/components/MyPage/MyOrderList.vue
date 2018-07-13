<template>
  <div>
    <h3 class="title">주문내역</h3>
    <section class="my-order-container">
      <table class="order-table">
        <!-- 기간 남은 티켓 -->

        <tr v-if="orderList.ticket">
          <td class="ticket-active-td">
            <div class="active-ticket">
              <span class="active-flag">정기권</span>
              <p class="product">{{orderList.ticket.product}}</p>
              <small class="term">{{orderList.ticket.term}}</small>
            </div>
          </td>
          <td class="ticket-td">
            <div class="ticket-detail">
              <table>
                <tr>
                  <td class="detail-title">
                    <span>상품명</span>
                  </td>
                  <td class="detail-content">
                    <span>{{orderList.ticket.product}}</span>
                  </td>
                </tr>
                <tr>
                  <td class="detail-title">
                    <span>기간</span>
                  </td>
                  <td class="detail-content">
                    <span>{{orderList.ticket.term}}</span>
                  </td>
                </tr>

                <tr>
                  <td class="detail-title">
                    <span class="star">결제 금액</span>
                  </td>
                  <td class="detail-content">
                    <span class="star">{{orderList.ticket.price}}원</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td>
            <div class="ticket-cancel">
              <table style="text-align:center">
                <tr>
                  <td>
                    <small>배송일을 기준으로<br>
                      남은 박스가 취소됩니다!
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-btn class="cancleActiveTicket" @click="clickCancel(orderList.ticket.idx)">정기권 취소</v-btn>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>


        <!-- 기간 안남은 티켓 -->
        <tr v-for="item in orderList.ticketed" :key="item.idx">
          <td class="ticket-inactive-td">
            <div class="inactive-ticket">
              <span class="inactive-flag">정기권</span>
              <p class="product">{{item.product}}</p>
              <small class="term">{{item.term}}</small>
            </div>
          </td>
          <td class="ticket-td">
            <div class="ticket-detail">
              <table>
                <tr>
                  <td class="detail-title">
                    <span>상품명</span>
                  </td>
                  <td class="detail-content">
                    <span>{{item.product}}</span>
                  </td>
                </tr>
                <tr>
                  <td class="detail-title">
                    <span>기간</span>
                  </td>
                  <td class="detail-content">
                    <span>{{item.term}}</span>
                  </td>
                </tr>
                <tr>
                  <td class="detail-title">
                    <span class="star">결제 금액</span>
                  </td>
                  <td class="detail-content">
                    <span class="star">{{item.price}}원</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td>
            <div class="ticket-inactive-cancel">
              <table style="text-align:center">
                <tr>
                  <td>
                    <small>배송일을 기준으로<br>
                      남은 박스가 취소됩니다!
                    </small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-btn disable="true" class="cancleInactiveTicket">정기권 취소</v-btn>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <!-- 정기권 데이터 없을 경우 -->
        <tr v-if="!(orderList.ticket && orderList.ticketed)">
          <td colspan="3" class="no-data-ticket">
            <span>현재 이용중인 정기권이 없습니다.</span><br>
            <v-btn class="goOrderBtn" router to="/order">미유박스 시작하기</v-btn>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'MyOrderList',
  data() {
    return {
      ticket: null,
      ticketed: null,
    };
  },
  computed: {
    ...mapGetters([
      'orderList'
      ]
    )
  },
  methods: {
    ...mapActions([
      'fetchOrderList',
      'deleteOrderAction'
    ]),
    async getOrderList() {
      const result = await this.fetchOrderList();

      this.ticket = result.ticket;
      this.ticketed = result.ticketed;

    },
    clickCancel(idx) {
      this.deleteOrderAction(idx);
      alert('cancel');
    }
  },
  created() {
    this.getOrderList()
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/MyOrderList.scss';

  .active-ticket {
    background: url('../../assets/images/order_page_pink_ticket.png') no-repeat;
    background-size: contain;
    min-height: 17vh;
    min-width: 17vw;
    margin: 1rem;
  }

  .inactive-ticket {
    background: url('../../assets/images/order_page_gray_ticket.png') no-repeat;
    background-size: contain;
    min-height: 17vh;
    min-width: 17vw;
    margin: 1rem;
  }
</style>
