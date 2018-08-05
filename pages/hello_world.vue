<template>
  <section class="container">
    <div>
      <app-logo/>
      <div>
        <button @click="fetch">fetchする</button>
      </div>
      <div>{{content}}</div>
      <div class="loading-view" v-if="loading">
        <p>Loading...</p>
      </div>
    </div>
    <rx-test/>
    <balloon balloon-label="削除する"/>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import RxTest from '~/components/RxTest.vue'
  // Ajax通信ライブラリ
  import axios from 'axios'
  import Balloon from '~/atom/Balloon/BalloonIndex.vue'

  export default {
    data: () => ({
      loading: false,
      content: "content text",
      count: 0
    }),

    components: {
      TestComponent,
      AppLogo,
      RxTest,
      Balloon,
    },

    methods: {
      fetch: function(){
        this.loading = true;

        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            this.content = response;
            this.loading = false;
          })
      }
    }
  }
</script>
