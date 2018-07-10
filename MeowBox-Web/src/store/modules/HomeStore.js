import axios from 'axios';
import {GET_REVIEW, BASE_URL} from '../constants/constants';

const state = {
};

const getters = {
};

const actions = {
  fetchReviewAction(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/home/review`)
        .then((res) => {
          if (res.data.status) {
            resolve(res.data.result);
          } else {
            reject();
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
