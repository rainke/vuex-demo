import { getBookInfo } from '@/api'

export default {
  state: {
    count: 1
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment ({commit}) {
      getBookInfo().then(() => {
        commit('increment')
      })
    }
  }
}
