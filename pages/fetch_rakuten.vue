<template>
  <section class="container">

    <div class="loading-view" v-if="isLoading">
      <p>Loading...</p>
    </div>

    <template v-for="(game, index) in gameList">
      <GameCard
        v-bind:key="index"
        :game = "game"
        @onCardClick="showSlideInSheet(game)"/>
    </template>

    <div class="loading-view" v-if="isError">
      <p>Errorだよぉ！！！！</p>
    </div>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppButton from '../layouts/atom/AppButton.vue'
  import GameCard from '../layouts/organisms/GameCard.vue'

  import { mapGetters, mapActions } from 'vuex';

  export default {
    async asyncData ({store}) {
      try {
        await store.dispatch('fetchRakutenGames')
      } catch (e) {
      }
    },
    components: {
      TestComponent,
      AppButton,
      GameCard
    },

    computed: {
      ...mapGetters([
        'isLoading',
        'isError',
        'gameList'
      ]),
    },
    methods: {
      ...mapActions([
        'fetch',
        'fetchRakutenGames'
      ]),
      showSlideInSheet(game){
        console.log("デバッグー")
        console.log(game)
      }
    }
  }
</script>
