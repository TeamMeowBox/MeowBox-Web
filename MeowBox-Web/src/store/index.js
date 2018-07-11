import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/UserStore'
import Cat from './modules/CatStore'
import Home from './modules/HomeStore'
import createPersistedState from'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {User, Cat, Home},
  // plugins: [createPersistedState()]
});
