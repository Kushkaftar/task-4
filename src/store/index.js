import Vue from 'vue'
import Vuex from 'vuex'
import { requestAxios } from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allOffers: [],
    message: [
      {
        id: 1,
        title: "title 1",
        text: "text 1",
        isRead: false,
      },
      {
        id: 2,
        title: "title 2",
        text: "text 2",
        isRead: false,
      },
    ],
  },
  mutations: {
    SET_ALL_OFFERS: (state, allOffers) => {
      state.allOffers = allOffers
    },
    MESSAGE_IS_READ: (state, id) => {
      state.message.forEach((el) => {
        if (el.id === id) {
          el.isRead = true
        }
      })
    },
  },
  actions: {
    async GET_ALL_OFFERS({ commit }) {
      const response = await requestAxios('offers')
      commit("SET_ALL_OFFERS", response.data.data)
      return response.data.data
    },
  },
  modules: {
  },
  getters: {
    ALL_OFFERS(state) {
      return state.allOffers
    },
    ALL_MESSAGE(state) {
      return state.message
    },
  },
})
