<template>
  <section class="container">
    <div class="main">
      <AppHeader/>
    </div>
    <div>
      <app-logo/>
      <div>
        <button @click="fetch">fetchする</button>
        <button @click="fetchWeather">天気をfetchする</button>
        <app-button button-label="アイウエオ"/>
      </div>
      <div>{{ updated }}</div>
      <div>{{ updatedIso }}</div>
      <div>{{ updateduk }}</div>

      <li v-for="(weather, index) in weatherList"
          v-bind:key="index">
        <WeatherCard label="weather.label"/>
      </li>
      <div class="loading-view" v-if="isLoading">
        <p>Loading...</p>
      </div>

      <div class="loading-view" v-if="isError">
        <p>Errorだよぉ！！！！</p>
      </div>

    </div>
    <rx-test/>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import AppButton from '../layouts/atom/AppButton.vue'
  import AppHeader from '../layouts/atom/AppHeader.vue'
  import WeatherCard from '../layouts/moleculs/WeatherCard'
  import RxTest from '~/components/RxTest.vue'

  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      TestComponent,
      AppButton,
      AppHeader,
      AppLogo,
      WeatherCard,
      RxTest,
    },

    computed: {
      ...mapGetters([
        'updated', //updatedとthis.$store.getters.updatedをマッピングしてくれる
        'updatedIso',
        'updateduk',
        'isLoading',
        'isError',
        'weatherList',
        // ...
      ]),
    },
    methods: {
      ...mapActions([
        'fetch',
        'fetchWeather'
      ]),
    }
  }
</script>
