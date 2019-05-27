import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: []
  },
  getters:{
    score:state =>{ return state.score }
  },
  mutations: {
    setScore(state, num){
      Vue.set(state.score, state.score.length, num)
    },
    resetScore(state) {
      state.score = []
    }
  },
  actions: {

  }
})
