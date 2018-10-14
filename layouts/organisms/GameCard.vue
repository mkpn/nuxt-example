<template>
  <div class="card"
       @click.prevent="$emit('onCardClick')">
    <div class="content">
      <MyImage class="image"
               :resourceUrl=game.largeImageUrl />
      <div>{{ game.title }}({{game.label}})</div>
      <div>発売日: {{ game.salesDate }}</div>
      <div>{{ game.hardware }}</div>
      <div>{{ game.itemPrice }}円</div>
      <div>レビュー: {{ game.reviewAverage }}({{game.reviewCount}})</div>
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
    }
  }
</script>

<style scoped>
  .card {
    background-color: #f0eff4;
    box-sizing: border-box;
    height: auto;
    width: auto;
    margin: .5em;
    padding: 1em;
    position: relative;
  }

  .content {
    position: relative;
  }

  .image {
    width: 100px
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
