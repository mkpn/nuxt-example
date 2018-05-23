<template>
  <section class="container">
    <div>
      <app-logo/>
      <div>
        <button @click="load">ボタンだぞ</button>
      </div>
      <div>{{content}}</div>
      <div>{{loading}}</div>
      <div class="loading-view" v-if="loading">
        <p>Loading...</p>
      </div>
    </div>
    <rx-test/>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import RxTest from '~/components/RxTest.vue'

  export default {
    data: () => ({
      loading: false,
      content: "content text",
      count: 0
    }),

    components: {
      TestComponent,
      AppLogo,
      RxTest
    },

    methods: {
      load: function () {
        this.loading = true;
        this.content = "button clicked";
      },
    }
  }
</script>
