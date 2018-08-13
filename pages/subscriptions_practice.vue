<template>
  <section id="qiita-posts">
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import RxTest from '~/components/RxTest.vue'
  // Ajax通信ライブラリ
  import axios from 'axios';

  export default {
    data: () => ({
      isLoading: false,
      content: "content text",
      count: 0
    }),

    components: {
      TestComponent,
      AppLogo,
      RxTest,
    },

    methods: {
      fetch: function () {
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
