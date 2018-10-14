<template>
  <div class="card">
    <div class="content">
      <h3>{{ game }}
      </h3>

      <p>Card which uses the background colour to show progress.</p>
      <!--<p class="percentage">70%</p>-->
      <MyImage :resourceUrl=game.largeImageUrl />
    </div>
  </div>
</template>

<script>
  import MyImage from '../atom/Image/ImageIndex'
  import Game from '../../entity/Game'

  export default {
    name: "GameCard.vue",
    components: {
      MyImage,
    },
    props: {
      game: {
        type: Game,
        required: true
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
