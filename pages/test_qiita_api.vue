<template>
  <section id="qiita-posts">
    {{content}}
    <button @click="fetch">fetchする</button>

    <ul>
      <li v-for="post in posts" v-bind:key="post.id">
        <span class="tag" v-for="tag in post['tags']" v-bind:key="tag.index">{{ tag['name'] }}</span>

        <a v-bind:href="post['url']" target="_blank" rel="noopener noreferrer">
          <div>{{ post['title'] }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import RxTest from '~/components/RxTest.vue'
  // Ajax通信ライブラリ
  import axios from 'axios';

  export default {
    data: () => ({
      loading: false,
      content: "content text",
      posts: [],
      count: 0
    }),

    components: {
      TestComponent,
      AppLogo,
      RxTest,
    },

    methods: {
      fetch: function () {
        this.loading = true;
        axios.get( 'https://qiita.com/api/v2/users/junsan50/items' )
          .then( ( res ) => {
            this.posts = res.data;
            this.loading = false;
          } )
          .catch( ( res ) => {
            console.error( res );
          } );
      }
    }
  }
</script>
