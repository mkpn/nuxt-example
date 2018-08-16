<template>
  <div class="card">
    <div class="content">
      <h3>{{ label }}</h3>
      <p>Card which uses the background colour to show progress.</p>
      <!--<p class="percentage">70%</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "WeatherCard.vue",
    props: {
      label: {
        type: String,
        default: ""
      },
      weatherStatus: {
        type: String,
        default: "晴れ"
      },
    },
  }
</script>

<style scoped>
  .card {
    background-color: #ffea5f;
    box-sizing:border-box;
    float:left;
    height:10em;
    margin:.5em;
    padding:1em;
    position:relative;
    width:20em;
  }

  .content {
    position:relative;
  }

  @keyframes slideIn {
    0% {
      background-color:#abc;
      width:0;
    }
    100% {
      background-color:#ffea5f;
      width:100%;
    }
  }

</style>
