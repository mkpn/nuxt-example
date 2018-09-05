import Time from '../entity/Time'
import axios from 'axios'
import WeatherRepositroy from '../repository/WeatherRepository'
import VideoRepositroy from '../repository/VideoRepository'

export const state = () => ({
  time: new Time(), // 初期値ってどうするのが良いプラクティスなんだろ
  isLoading: false,
  isError: false,
})

export const getters = {
  isLoading: state => state.isLoading,

  isError: state => state.isError,

  updated: state => state.time.updated,

  updatedIso: state => state.time.updatedIso,

  updateduk: state => state.time.updateduk,
}

export const mutations = {
  startLoading: function (state) {
    state.time = new Time()
    state.isError = false
    state.isLoading = true
  },

  finishLoading: function (state) {
    state.isLoading = false
  },

  setContent: function (state, time) {
    state.time = time
  }
}

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const actions = {
  fetch: async function (context) {
    context.commit('startLoading')
    try {
      await  sleep(1000)
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      let time = new Time(response)
      context.commit('setContent', time)
    } catch (error) {
    } finally {
      context.commit('finishLoading')
    }
  }
}
