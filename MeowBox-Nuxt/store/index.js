import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie';

import User from './modules/UserStore';



const createStore = () => {
  return new Vuex.Store({
    plugins: [
      createPersistedState({
        storage: {
          getItem: key => Cookies.get(key),
          setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
          removeItem: key => Cookies.remove(key)
        }
      })
    ],
    modules: {
      User
    }
  });
};

export default createStore;



