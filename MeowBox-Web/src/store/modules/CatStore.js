// import axios from 'axios'
// import {SET_TOKEN, REMOVE_TOKEN, FETCH_USER_PROFILE} from '../constants/constants'
// const BASE_URL = 'http://13.209.220.1:3000';




// const state = {
//   token: localStorage.getItem('token') || null,
//   userProfile: {}
// };


// const getters = {
//   token: state => state.token,
//   userProfile: state => state.userProfile
// };


// const actions = {
//   loginAction (context, info) {
//     return new Promise(resolve => {
//       axios.post(`${BASE_URL}/user/signin`, info)
//         .then(res => {
//           if (res.data.status) {
//             localStorage.token = res.data.result.token;
//             localStorage.user_idx = res.data.result.user_idx;
//             localStorage.cat_idx = res.data.result.cat_idx;
//             context.commit(SET_TOKEN, res.data.result);

//             resolve(true)
//           }
//         })
//         .catch(e => { // 500 error
//           console.log(e);
//           resolve(false)
//         })
//     })
//   },
//   fetchUserProfile(context, userIdx) {
//     return new Promise(() => {
//       axios.get(`${BASE_URL}/mypage/account/${userIdx}`, {headers: {authorization: localStorage.getItem('token')}})
//         .then((res) => {
//           if (res.data.status) {
//             context.commit(FETCH_USER_PROFILE, res.data.result);
//           }
//         })
//     })
//   }
// };


// const mutations = {
//   [SET_TOKEN](state, payload) {
//     state.token = payload.token;
//     state.userProfile.userIdx = payload.user_idx;
//   },
//   [REMOVE_TOKEN](state) {
//     state.token = null;
//     state.userProfile.userIdx = null
//   },
//   [FETCH_USER_PROFILE](state, payload) {
//     state.userProfile.userName = payload[0].user_name;
//     state.userProfile.email = payload[0].email;
//     state.userProfile.phoneNumber = payload[0].phone_number;
//     state.userProfile.imageProfile = payload[0].image_profile;
//     state.userProfile.catName = payload[0].cat_name;
//     state.userProfile.size = payload[0].size;
//     state.userProfile.birthday = payload[0].birthday;
//     state.userProfile.caution = payload[0].caution;
//   }
// };


// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }
