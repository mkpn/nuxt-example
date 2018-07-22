<template>
  <section class="container">
    <div class="main">
      <AppHeader/>
    </div>
    <div>
      <app-logo/>
      <div>
        <button @click="fetch">fetchする</button>
        <app-button button-label="アイウエオ"/>
      </div>
      <div>{{content}}</div>
      <div class="loading-view" v-if="loading">
        <p>Loading...</p>
      </div>
    </div>
    <div class="search-form">
      <app-button/>
    </div>
    <rx-test/>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import AppButton from '../atom/AppButton.vue'
  import AppHeader from '../atom/AppHeader.vue'
  import RxTest from '~/components/RxTest.vue'
  // Ajax通信ライブラリ
  import axios from 'axios';

  export default {
    data: () => ({
      loading: false,
      content: "content text",
      count: 0
    }),

    components: {
      TestComponent,
      AppButton,
      AppHeader,
      AppLogo,
      RxTest,
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
