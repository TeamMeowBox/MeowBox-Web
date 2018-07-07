import axios from 'axios';

const BASE_URL = 'http://13.209.220.1:3000';

const SET_TOKEN = 'SET_TOKEN';


const state = {
  userInfo: {}
};

const getters = {
  userInfo: state => state.userInfo
};

const actions = {
  loginAction(context, info) {
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/user/signin`, info)
        .then(res => {
          if (res.data.status === true) {
            localStorage.token = res.data.result.token;
            localStorage.user_idx = res.data.result.user_idx;

            context.commit(SET_TOKEN, res.data.result);

            resolve(true);
          }
        })
        .catch(e => { // 500 error
          console.log(e);
          resolve(false);
        });
    })
  }
};

const mutations = {
  [SET_TOKEN](state, payload) {
    state.userInfo.token = payload.token;
    state.userInfo.userIdx = payload.user_idx;
  },
};





export default {
  state,
  getters,
  mutations,
  actions
}
