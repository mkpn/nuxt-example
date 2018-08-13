import Vuex from 'vuex';
import Time from '../entity/Time';
import axios from 'axios';

export var store = function () {
  return new Vuex.Store({
    state: {
      time: null, // 初期値ってどうするのが良いプラクティスなんだろ
      isLoading: false,
      isError: false,
    },

    getters: {
      isLoading: state => state.isLoading,
      isError: state => state.isError,
      updated: state => {
        if (!state.time) return null;
        return state.time.updated;
      },
      updatedIso: state => {
        if (!state.time) return null;
        return state.time.updatedIso;
      },
      updateduk: state => {
        if (!state.time) return null;
        return state.time.updateduk;
      },
    },

    // TODO mutationってどんな命名アプローチがわかりやすいんだ・・・
    mutations: {
      startLoading: function (state) {
        state.time = null;
        state.isError = false;
        state.isLoading = true;
      },

      finishLoading: function (state) {
        state.isLoading = false;
      },

      setContent: function (state, time) {
        state.time = time;
      },

      caughtException: function (state) {
        state.isError = true;
      },
    },

    actions: {
      fetch: function (context) {
        context.commit('startLoading');
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(function (response) {
            let time = new Time(response);
            context.commit('setContent', time);
          })
          .catch(e => {
            console.log(e);
            context.commit('caughtException');
          })
          .finally(() => context.commit('finishLoading'));
      }
    }
  });
};
export default store;
