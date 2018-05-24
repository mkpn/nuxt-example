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

<style lang="scss">
  body {
    padding: 0 10px;
  }

  #qiita-posts {
    h1 {
      margin-bottom: 20px;
      font-size: 1.2rem;
      font-weight: bold;
    }

    button {
      margin-bottom: 10px;
      padding: 4px 10px;
      color: #fff;
      font-size: 0.75rem;
      background: #325d7c;
      border: none;
      border-radius: 2px;
      box-shadow: 0 4px 0 darken(#325d7c, 4%);
      cursor: pointer;
    }

    li {
      margin-bottom: 15px;
      line-height: 1.5;

      .tag {
        display: inline-block;
        margin: 0 1px 6px;
        padding: 2px 6px;
        color: #fff;
        font-size: 0.75rem;
        background: #7daaca;
      }

      a {
        color: darken(#7daaca, 24%);
      }
    }
  }

</style>
