<template>
  <img :src="resourceUrlß"/>
</template>

<script>
  export default {
    name: "image_index",
    props: {
      resourceUrl: {
        type: String,
        default: ""
      },
    },
  }
</script>

<style scoped>

</style>
