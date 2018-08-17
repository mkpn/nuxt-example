<template>
  <div class="card">
    <div class="content">
      <iframe width="560" height="315" src="videoSrc"
              frameborder="0"
              allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  import MyImage from '../atom/Image/ImageIndex'

  export default {
    name: "WeatherCard.vue",
    components: {
      MyImage,
    },
    props: {
      videoSrc: {
        type: String,
        default: ""
      }
    },
  }
</script>

<style scoped>
  .card {
    background-color: #ffea5f;
    box-sizing: border-box;
    float: left;
    height: 10em;
    margin: .5em;
    padding: 1em;
    position: relative;
    width: 20em;
  }

  .content {
    position: relative;
  }

  @keyframes slideIn {
    0% {
      background-color: #abc;
      width: 0;
    }
    100% {
      background-color: #ffea5f;
      width: 100%;
    }
  }

</style>
