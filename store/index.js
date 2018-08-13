import Vuex from 'vuex';
import Time from '../entity/Time';
import axios from 'axios';

export var store = function () {
  return new Vuex.Store({
    state: {
      time: null,
      isLoading: false,
    },

    getters: {
      isLoading: function (state) {
        return state.isLoading;
      },
      updated: function (state) {
        if (!state.time) return null;
        return state.time.updated;
      },
      updatedIso: function (state) {
        if (!state.time) return null;
        return state.time.updatedIso;
      },
      updateduk: function (state) {
        if (!state.time) return null;
        return state.time.updateduk;
      },
    },

    mutations: {
      startLoading: function (state) {
        state.time = null;
        state.isLoading = true;
      },
      finishLoading: function (state, time) {
        state.isLoading = false;
        state.time = time;
      }
    },

    actions: {
      fetch: function (context) {
        context.commit('startLoading');
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(function (response) {
            let time = new Time(response);
            context.commit('finishLoading', time);
          });
      }
    }
  });
};
export default store;
