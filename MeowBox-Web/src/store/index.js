import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/UserStore'
import Cat from './modules/CatStore'
import Home from './modules/HomeStore'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {User, Cat, Home}
});
