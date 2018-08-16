<template>
  <h1 id="my-heading" :is="tag">{{ headingLabel }}</h1>
</template>

<script>
  export default {
    el: "#my-heading",
    name: "heading-index",
    props: {
      headingLabel: {
        type: String,
        default: "デフォルト",
      },
      level: {
        type: Number,
        required: true,
        default: 3,
      },
    },
    computed: {
      tag() {
        return `h${this.level}`
      }
    },
  }
</script>

<style>

</style>
