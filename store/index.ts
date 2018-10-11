import Time from '../entity/Time'
import axios from 'axios'
import WeatherRepositroy from '../repository/WeatherRepository'
import VideoRepositroy from '../repository/VideoRepository'
import RakutenGamesRepository from '../repository/RakutenGamesRepository'
import Game from "~/entity/Game";

export const state = () => ({
  time: new Time(), // 初期値ってどうするのが良いプラクティスなんだろ
  weatherList: [],
  videoList: [],
  gameDataRaw: "",
  isLoading: false,
  isError: false,
})

export const getters = {
  isLoading: state => state.isLoading,

  isError: state => state.isError,

  weatherList: state => state.weatherList,

  videoList: state => state.videoList,

  updated: state => state.time.updated,

  updatedIso: state => state.time.updatedIso,

  updateduk: state => state.time.updateduk,

  gameList(state) {
    const games: any[] = []
    state.gameDataRaw.forEach(item => {
      games.push(new Game(item.Item))
    })
    return games
  }
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

  setVideoList: function (state, videoList) {
    state.videoList = videoList
  },

  setGameDataRaw: function (state, gameDataRaw) {
    state.gameDataRaw = gameDataRaw
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
      context.commit('setWeatherList', wetherList)
    } catch (e) {
      console.log(e)
    } finally {
      context.commit('finishLoading')
    }
  },

  fetchVideoList: async function (context) {
    try {
      const videoList = VideoRepositroy.fetchVideoList()
      context.commit('setVideoList', videoList)
    } catch (e) {
      console.log(e)
    } finally {
      context.commit('finishLoading')
    }
  },

  fetchRakutenGames: async function (context) {
    try {
      const gameDataRaw = await RakutenGamesRepository.fetchRaw()
      context.commit('setGameDataRaw', gameDataRaw)
    } catch (e) {
      console.log(e)
    } finally {
      context.commit('finishLoading')
    }
  },
}
