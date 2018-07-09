import axios from 'axios'
import {SET_FLAG, SET_TOKEN, REMOVE_TOKEN, FETCH_USER_PROFILE, UP_FLAG} from '../constants/constants'
const BASE_URL = 'http://13.209.220.1:3000'

const state = {
  token: localStorage.getItem('token') || null,
  userProfile: {},
  flag: 0
}

const getters = {
  token: state => state.token,
  userProfile: state => state.userProfile,
  getFlag: state => state.flag
}

const actions = {
  loginAction (context, info) {
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
  signUpAction (context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/signup`, info)
        .then(res => {
          if (res.data.status) {
            localStorage.token = res.data.result.token
            console.log(res.data)

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
  fetchUserProfile (context) {
    return new Promise(() => {
      console.log('call fetchuserprofile');
      axios.get(`${BASE_URL}/mypage/account_setting/account/`, {headers: {authorization: localStorage.getItem('token')}})
        .then((res) => {
          if (res.data.status) {
            context.commit(FETCH_USER_PROFILE, res.data.result)
          }
        })
    })
  },
};
const mutations = {
  [SET_TOKEN] (state, payload) {
    state.token = payload.token
  },
  [REMOVE_TOKEN] (state) {
    state.token = null
    state.userProfile.userIdx = null
  },
  [FETCH_USER_PROFILE] (state, payload) {
    state.userProfile.userName = payload.user_name;
    state.userProfile.email = payload.email;
    state.userProfile.phoneNumber = payload.phone_number;
    state.userProfile.imageProfile = payload.image_profile;
    state.userProfile.cats_idx = payload.cats_idx;
    state.userProfile.caution = payload.caution;
    state.userProfile.size = payload.size;
    state.userProfile.catName = payload.cat_name;
    state.userProfile.birthday = payload.birthday;
  },
  [UP_FLAG] (state) {
    state.flag += 1
  },
  [SET_FLAG] (state) {
    state.flag = 2
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
