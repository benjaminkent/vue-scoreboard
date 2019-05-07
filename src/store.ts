import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamOneScore: 0,
    teamNameOne: null,
    teamTwoScore: 0,
    teamNameTwo: null
  },
  mutations: {
    addTeamOne(state) {
      state.teamOneScore += 1
    },
    subtractTeamOne(state) {
      if (state.teamOneScore <= 0) { return }
      state.teamOneScore -= 1
    },
    updateTeamOne(state, name) {
      state.teamNameOne = name
    },
    resetTeamOneScore(state, score) {
      state.teamOneScore = score
    },
    addTeamTwo(state) {
      state.teamTwoScore += 1
    },
    subtractTeamTwo(state) {
      if (state.teamTwoScore <= 0) { return }
      state.teamTwoScore -= 1
    },
    updateTeamTwo(state, name) {
      state.teamNameTwo = name
    },
    resetTeamTwoScore(state, score) {
      state.teamTwoScore = score
    }
  }
})