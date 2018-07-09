import axios from 'axios'

import {SET_CAT, SET_DEFAULT_CAT} from '../constants/constants'

const BASE_URL = 'http://13.209.220.1:3000'

const state = {
  cat_idx: localStorage.getItem('cat_idx') || null
}

const getters = {
  cat_idx: state => state.cat_idx
}

const mutations = {
  [SET_CAT](state, payload) {
    state.cat_idx = payload.cat_idx
  },
  [SET_DEFAULT_CAT](state) {
    state.cat_idx = -1
  }
}

const actions = {
  registCatAction(context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/cat_signup`, info, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
          console.log(res.data);

          if (res.data.status) {
            localStorage.cat_idx = res.data.result.cat_idx
            console.log(res.data.result);

            context.commit(SET_CAT, res.data.result)
            resolve(true)
          }
        })
        .catch(e => { // 500 error
          console.log(e)
          resolve(false)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
