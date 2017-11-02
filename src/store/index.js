import Vuex from 'vuex'
import Vue from 'vue'
import counter from './modules/counter'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    counter
  }
})

export default store
