import Vuex from 'vuex'
import Time from "~/entity/Time";

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  modules: {
    fetch_test: {
      state: {
        loading: false,
        updated: "",
        updatedIso: "",
        updateduk: "",
      },
      mutations: {
        startLoading(state) {
          state.loading = true;
        },
        finishLoading(state, time: Time) {
          state.updated = time.updated;
          state.updatedIso = time.updatedIso;
          state.updateduk = time.updateduk;
        }
      }
    }
  }
})

export default store
