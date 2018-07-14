import axios from 'axios'


import {
  DEFAULT_FLAG,
  SET_FLAG,
  SET_TOKEN,
  REMOVE_TOKEN,
  FETCH_USER_PROFILE,
  UP_FLAG,
  DOWN_FLAG,
  GET_MYPAGE_INFO,
  BASE_URL,
  REMOVE_TICKET
} from '../constants/constants'

const HEADER = {headers: {authorization: localStorage.getItem('token')}}


const IMP = window.IMP // 생략해도 괜찮습니다.
IMP.init('imp68124833') // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.
window.onload = function () {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://service.iamport.kr/js/iamport.payment-1.1.5.js'
  var x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)
}


const state = {
  token: localStorage.getItem('token') || null,
  // userProfile: {
  //   userName: null,
  //   email: null,
  //   phoneNumber: null,
  //   imageProfile: null,
  //   cat_idx: null,
  //   caution: null,
  //   size: null,
  //   catName: null,
  //   birthday: null
  // },
  myPageInfo: null,
  userProfile: null,
  flag: 0,
  usedTicket: null
}

const getters = {
  token: state => state.token,
  userProfile: state => state.userProfile,
  getFlag: state => state.flag,
  usedTicket: state => state.usedTicket,
  myPageInfo: state => state.myPageInfo
}

const actions = {

  orderAction(resolve, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/order/order_page`, info, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
          if (res.data.status) {
            console.log(res.data)
            IMP.request_pay({ // param
              pg: 'html5_inicis',
              merchant_uid: res.data.order_idx,
              name: info.name,
              amount: info.price,
              kakaoOpenApp: true
            }, (rsp) => { // callback
              if (rsp.success) {
                axios.post(`${BASE_URL}/user/signin`, info)
                  .then(res => {
                    if (res.data.status) {
                      axios.post(`${BASE_URL}/order/order_result/web`, {
                        'imp_uid': rsp.imp_uid,
                        'token': localStorage.token,
                        'merchant_uid': rsp.merchant_uid,
                      })
                        .then(res => {
                          if (res.data.status) {
                            console.log(res.data)
                            resolve(true)
                          }
                        })
                        .catch(e => { // 500 error
                          console.log(e)
                          resolve(false)
                        })
                      resolve(true)
                    }
                  })
                  .catch(e => { // 500 error
                    console.log(e)
                    resolve(false)
                  })
              } else {
                window.alert('결제가 실패했습니다. 다시 요청해 주세요')
                console.log(rsp.error_msg)
              }
            })
            resolve(res.data.result)
          }
        })
        .catch(e => { // 500 error
          console.log(e)
          resolve(false)
        })
    })
  },
  loginAction(context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/signin`, info)
        .then(res => {
          if (res.data.status) {
            localStorage.token = res.data.result.token
            localStorage.cat_idx = res.data.result.cat_idx
            context.commit(SET_TOKEN, res.data.result)

            resolve(true)
          }
        })
        .catch(e => { // 500 error
          console.log(e)
          resolve(false)
        })
    })
  },
  signUpAction(context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/signup`, info)
        .then(res => {
          if (res.data.status) {
            localStorage.token = res.data.result.token
            localStorage.cat_idx = -1

            context.commit(SET_TOKEN, res.data.result)
            resolve(true)
          }
        })
        .catch(e => { // 500 error
          console.log(e)
          resolve(false)
        })
    })
  },
  fetchUserProfile(context) {
    return new Promise((resolve) => {
      axios.get(`${BASE_URL}/mypage/account_setting/account/`, {headers: {authorization: localStorage.getItem('token')}})
        .then((res) => {
          if (res.data.status) {
            context.commit(FETCH_USER_PROFILE, res.data.result)
            resolve(res.data.result)
          }
        })
    })
  },
  editUserProfile(context, data) {
    return new Promise((resolve, reject) => {
      axios.post(`${BASE_URL}/mypage/account_setting/update_user`, data, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
          if (res.data.status) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
        .catch(e => {
          console.log(e)
          reject()
        })
    })
  },
  getOrder(resolve, data) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/order/order_page`, {headers: {authorization: localStorage.getItem('token')}})
        .then((res) => {
          if (res.data.status) {
            resolve(res.data.result)
          }
        })
    })
  },
  fetchMyPageInfoAction(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/mypage/mypageinfo/web`, HEADER)
        .then((res) => {
          if (res.data.status) {
            context.commit(GET_MYPAGE_INFO, res.data.result)
            resolve(res.data.result)
          } else {
            const _err = new Error('fetchMyPage Error')
            reject(_err)
          }
        })
    })
  },
  deleteOrderAction(context, idx) {
    return new Promise((resolve, rejecct) => {
      axios.delete(`${BASE_URL}/order/order_list/${idx}`, HEADER)
        .then((res) => {
          if (res.data.status) {
            context.commit(REMOVE_TOKEN, res.data.result);
            resolve(res.data.result);
          }
        })
    })
  },
}

const mutations = {
  [SET_TOKEN](state, payload) {
    state.token = payload.token
  },
  [REMOVE_TOKEN](state) {
    state.token = null
    state.userProfile.userIdx = null
  },
  [FETCH_USER_PROFILE](state, payload) {
    state.userProfile = payload
  },
  [UP_FLAG](state) {
    state.flag += 1
  },
  [SET_FLAG](state) {
    state.flag = 2
  },
  [DOWN_FLAG](state) {
    state.flag -= 1
  },
  [DEFAULT_FLAG](state) {
    state.flag = 0
  },
  [GET_MYPAGE_INFO](state, payload) {
    state.usedTicket = payload
    state.myPageInfo = payload
  },
  [REMOVE_TICKET](state, payload) {
    state.usedTicket = payload
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
