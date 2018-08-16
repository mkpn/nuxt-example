import Time from '../entity/Time'
import axios from 'axios'
import WeatherRepositroy from '../repository/WeatherRepository'

export const state = () => ({
  time: new Time(), // 初期値ってどうするのが良いプラクティスなんだろ
  weatherList: [],
  isLoading: false,
  isError: false,
})

export const getters = {
  isLoading: state => state.isLoading,

  isError: state => state.isError,

  weatherList: state => state.weatherList,

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
  },

  setWeatherList: function (state, weatherList) {
    state.weatherList = weatherList
  },

  caughtException: function (state) {
    state.isError = true
  },
}

export const actions = {
  fetch: async function (context) {
    context.commit('startLoading')
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      let time = new Time(response)
      context.commit('setContent', time)
    } catch (error) {
    } finally {
      context.commit('finishLoading')
    }
  },
  fetchWeather: async function (context) {
    context.commit('startLoading')
    try {
      const wetherList = WeatherRepositroy.fetchWeatherList()
      console.log(wetherList)
      context.commit('setWeatherList', wetherList)
    } catch (e) {
      console.log(e)
    } finally {
      context.commit('finishLoading')
    }
  }
}
