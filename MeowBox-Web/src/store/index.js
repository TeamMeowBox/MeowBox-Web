import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/UserStore'
import Cat from './modules/CatStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {User, Cat}
})
