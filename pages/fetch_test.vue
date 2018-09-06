<template>
  <section class="container">
    <div class="main">
      <AppHeader/>
    </div>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/srH34Tjjo9U" frameborder="0"
              allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <app-logo/>
      <div>
        <button @click="fetch">fetchする</button>
        <button @click="fetchWeather">天気をfetchする</button>
        <app-button button-label="アイウエオ"/>
      </div>
      <div>{{ updated }}</div>
      <div>{{ updatedIso }}</div>
      <div>{{ updateduk }}</div>

      <template v-for="(weather, index) in weatherList">
        <WeatherCard
          v-bind:key="index"
          :weatherTelop="weather.telop"
          :weatherIconUrl="weather.imageUrl"/>

      </template>
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

<script lang="ts">
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import AppButton from '../layouts/atom/AppButton.vue'
  import AppHeader from '../layouts/atom/AppHeader.vue'
  import WeatherCard from '../layouts/organisms/WeatherCard'
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

  interface Res {
    a: number;
    b: string;
    getHoge():string
  }

  function getResponse() :Res {

    return {
      a: 1,
      b: "aaaa",
      getHoge() {
      }
    }
  }

  const res = getResponse()

</script>
