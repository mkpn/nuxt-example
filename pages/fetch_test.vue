<template>
  <section class="container">
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

<script>
  import AppLogo from '../components/AppLogo'
  import RxTest from '../components/RxTest'
  import TestComponent from '../components/TestComponent'
  import WeatherCard from '../layouts/organisms/WeatherCard'
  import AppButton from '../layouts/atom/AppButton'

  export default {
    components: {
      AppLogo,
      TestComponent,
      RxTest,
      WeatherCard,
      AppButton,
    }
  }
</script>
