<template>
  <div>
    <Balloon balloonLabel="バルーンだょ" v-bind:style="{top:'200px', left:'200 px'}"/>
    <MyImg
      resourceUrl="https://www.kigawaya.com/sake/assets_c/2017/07/a9c6dd512981caf5ac16d15967c5c7c0d1458ad9-thumb-autox500-11057.jpg"/>
  </div>
</template>

<script>
  import Balloon from '~/atom/Balloon/balloon_index.vue';
  import MyImg from '~/atom/Image/image_index.vue';

  export default {
    name: "atomic_design_practice",
    components: {
      Balloon,
      MyImg,
    },
  }
</script>

<style scoped>

</style>
