<template>
  <section class="container">
    <div>
      <button @click="fetchRakutenGames">ゲームをfetchする</button>
    </div>

    <div class="loading-view" v-if="isLoading">
      <p>Loading...</p>
    </div>

    <div class="loading-view" v-if="isError">
      <p>Errorだよぉ！！！！</p>
    </div>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppButton from '../layouts/atom/AppButton.vue'

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
    },
    created() {
      console.log("gameListだよー")
      console.log(this.gameList)
    }
  }
</script>
