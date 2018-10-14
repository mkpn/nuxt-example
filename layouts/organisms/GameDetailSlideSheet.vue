<template>
  <SlideInSheetLayout>
    <span slot="header">新規トピック作成</span>

    <div
      slot="close"
      @click="hideSlideInSheet"
    >
      <!--<VIconFont type="close" :remSize="2.2" />-->
    </div>

    <div
      slot="action"
      :disabled="validationTopic.hasError || isPosting"
    >アクションリンク
    </div>

    <div>
      <h3>タイトル</h3>
      <MyImage class="image"
               :resourceUrl="game.largeImageUrl"/>
      <div>{{ game.title }}({{game.label}})</div>
      <div>発売日: {{ game.salesDate }}</div>
      <div>{{ game.hardware }}</div>
      <div>{{ game.itemPrice }}円</div>
      <div>レビュー: {{ game.reviewAverage }}({{game.reviewCount}})</div>
    </div>

  </SlideInSheetLayout>
</template>

<script>
  import MyImage from '../atom/Image/ImageIndex'
  import SlideInSheetLayout from '../molecules/SlideInSheetLayout.vue'
  import Game from '../../entity/Game'

  export default {
    name: "GameDetailSlideSheet",
    components: {
      MyImage,
      SlideInSheetLayout
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

</style>
