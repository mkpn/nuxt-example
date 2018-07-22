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
    name: 'MyHeader',
    methods: {
      nya () {
        console.log('にゃー')
      }
    },
    created () {
      this.nya()
    }
  }
</script>

<style scoped>
  .header {
    background: #000;
    color: #FFF;
  }
</style>
