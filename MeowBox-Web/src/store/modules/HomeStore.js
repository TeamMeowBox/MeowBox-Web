import axios from 'axios';
import {GET_REVIEW, BASE_URL, GET_ORDER_LIST} from '../constants/constants';

const HEADER = {headers: {authorization: localStorage.getItem('token')}};

const state = {
};

const getters = {
};

const actions = {
  fetchReviewAction(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/home/review_web`)
        .then((res) => {
          if (res.data.status) {
            resolve(res.data.result);
          } else {
            reject();
          }
        })
    })
  },
  fetchInstaAction() {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/home/monthlyBox_detail/crawling`)
        .then((res) => {
          if (res.data.status) {
            resolve(res.data.result);
          } else {
            reject();
          }
        })
    })
  },
  fetchOrderList() {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/order/order_list`, HEADER)
        .then((res) => {
          console.log('res', res);
          if (res.data.status) {

            if (isEmptyObject(res.data.result.ticket)) {
              res.data.result.ticket = null;
            }
            if (isEmptyArray(res.data.result.ticketed)) {
              res.data.result.ticketed = null;
            }
            resolve(res.data.result);
          } else {
            reject();
          }
        })
    })
  },
  fetchCatCountAction() {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/home/monthlyBox_detail/catCount`)
        .then((res) => {
          if (res.data.status) {
            resolve(res.data.result);
          }
        })
    })
  }
};

const mutations = {
};


export default {
  state,
  getters,
  mutations,
  actions
}

const isEmptyObject = (obj) => {
  // return JSON.stringify(obj) === '{}'
  return Object.keys(obj).length === 0
};

const isEmptyArray = (arr) => {
  console.log(arr.length === 0);
  return arr.length === 0
};
