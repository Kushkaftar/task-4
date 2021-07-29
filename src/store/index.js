import Vue from 'vue'
import Vuex from 'vuex'
import { requestAxios } from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allOffers: {
      data: [],
      err: false
    },
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
      state.allOffers.data = allOffers
    },
    SET_ALL_OFFERS_ERR: (state, err) => {
      state.allOffers.err = err
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
      try {
        const response = await requestAxios('offers')
        commit("SET_ALL_OFFERS", response.data.data)
        return response.data.data
      } catch (err) {
        commit("SET_ALL_OFFERS_ERR", true)
        console.error(err, "edrfhgberth")
      }

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
