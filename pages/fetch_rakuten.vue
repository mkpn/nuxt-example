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
  import RxTest from '~/components/RxTest.vue'

  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      TestComponent,
      AppButton,
      RxTest,
    },

    computed: {
      ...mapGetters([
        'isLoading',
        'isError',
      ]),
    },
    methods: {
      ...mapActions([
        'fetch',
        'fetchRakutenGames'
      ]),
    }
  }
</script>
