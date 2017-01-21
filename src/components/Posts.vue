<template>
  <div class="posts list">
    <div class="post summary" v-for="post in posts">
      {{ getDatePosted(post) }}
      <router-link :to="{ name: 'post', params: { id: post.id.toString() }}"> 
        <div class="title">
          {{ post.title }} 
        </div>
      </router-link>
      <div class="first line">
        {{ getFirstLine(post) }}.
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  export default {
    data () {
      return {
        posts: []
      }
    },
    created () {
      this.fetchPosts()
    },
    methods: {
      getDatePosted (post) {
        return moment(post.createdAt).format('MMM YYYY')
      },
      getFirstLine (post) {
        return post.content.split('.')[0]
      },
      fetchPosts () {
        return axios.get('http://localhost:3000/posts')
          .then((response) => {
            this.posts = response.data
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      }
    }
  }
</script>

<style scoped>
  .post.summary {
    padding: 0.5em 0.5em 0.5em 0.5em;
  }

  .route {
    display: block;
  }

  .posts.list {
    width: 80%;
    margin-left: 10%;
  }
  
  .title {
    display: inline-block;
    font-size: 2em;  
    margin-left: 1em;
  }

  .first.line {
    font-size: 1.5em;
  }
</style>
