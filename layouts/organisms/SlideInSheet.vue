<template>
  <transition name="slideIn" v-if="isShow">

    <div
      :is="bodyComponent"
    />

  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    computed: {
      ...mapGetters([
        'isShow',
        'bodyComponent'
      ])
    }
  }
</script>

<style lang="scss">
  .slideIn{
  &-enter-active {
     transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);;
     }

  &-leave-active {
     transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);;
   // MEMO: モーダル解除時のスクロール位置調整のチラツキ防止策 (layout/default.vueのremoveFiexd()とのタイミングゲー)
   transition-delay:  0.06s;
     }

  &-enter{
     transform: translateY(100%);
     }
  &-enter-to{
     transform: translateY(0%);
     }
  &-leave-to{
     transform: translateY(100%);
     }
    }
</style>
