import axios from 'axios'


import {SET_CAT, SET_DEFAULT_CAT, GET_CAT, BASE_URL} from '../constants/constants'


const state = {
  cat_idx: localStorage.getItem('cat_idx') || null,
  catProfile: null,
}

const getters = {
  cat_idx: state => state.cat_idx,
  catProfile: state => state.catProfile
}

const mutations = {
  [SET_CAT](state, payload) {
    state.cat_idx = payload.cat_idx
  },
  [SET_DEFAULT_CAT](state) {
    state.cat_idx = -1
  },
  [GET_CAT](state, payload) {
    state.catProfile = payload;
  }
};

const actions = {
  registCatAction(context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/cat_signup`, info, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
          // console.log(res.data);

          if (res.data.status) {
            localStorage.cat_idx = res.data.result.cat_idx
             console.log(res.data.result);

            context.commit(SET_CAT, res.data.result)
            resolve(true)
          }
        })
        .catch(e => { // 500 error
          console.log('error in action regi', e);
          resolve(false)
        })
    })
  },
  fetchCatAction(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/user/cat/${localStorage.getItem('cat_idx')}`, {headers: {authorization: localStorage.getItem('token')}})
        .then((res) => {
          if (res.data.status) {
            console.log('res', res);
            context.commit(GET_CAT, res.data.result);
            resolve(res.data.result);
          }
        });
    })
  },
  updateCatAction(context, info) {
    return new Promise((resolve) => {
      axios.post(`${BASE_URL}/mypage/account_setting/update_cat`, info, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
          res.data.status ? resolve(true) : resolve(false)
        })
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
