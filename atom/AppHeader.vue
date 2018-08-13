<template>
  <header>
    <navi>
      <a>top</a>
      <a>search></a>
      <a>mypage</a>
    </navi>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    methods: {
      test () {
        console.log('チェーック')
      }
    },
    created () {
      this.test()
    },
  }
</script>

<style scoped>
  .header {
    background: #000;
    color: #FFF;
  }
</style>
