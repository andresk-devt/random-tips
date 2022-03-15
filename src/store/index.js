import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  advice: null,
};

const getters = {
  getAdvice(state) {
    return state.advice;
  },
};

const mutations = {
  setAdvice(state, data) {
    state.advice = data;
  },
};

const actions = {
  async getAdvicePeticion({ commit }) {
    let response = await fetch("https://api.adviceslip.com/advice").then(
      (response) => response.json()
    );
    commit("setAdvice", response.slip);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
