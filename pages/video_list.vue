<template>
  <section class="container">
    <div class="main">
      <AppHeader/>
    </div>
    <div>
      <template v-for="(video, index) in videoList">
        <VideoCard
          v-bind:key="index"
          :videoSrc="video.src"/>

      </template>
      <div class="loading-view" v-if="isLoading">
        <p>Loading...</p>
      </div>

      <div class="loading-view" v-if="isError">
        <p>Errorだよぉ！！！！</p>
      </div>

    </div>
    <rx-test/>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import AppButton from '../layouts/atom/AppButton.vue'
  import AppHeader from '../layouts/atom/AppHeader.vue'
  import VideoCard from '../layouts/organisms/VideoCard'
  import RxTest from '~/components/RxTest.vue'

  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      TestComponent,
      AppButton,
      AppHeader,
      AppLogo,
      VideoCard,
      RxTest,
    },
    created() {
      console.log("created!!")
      this.fetchVideoList()
    },

    computed: {
      ...mapGetters([
        'updated', //updatedとthis.$store.getters.updatedをマッピングしてくれる
        'updatedIso',
        'updateduk',
        'isLoading',
        'isError',
        'videoList',
        // ...
      ]),
    },
    methods: {
      ...mapActions([
        'fetch',
        'fetchVideoList'
      ]),
    }
  }
</script>
