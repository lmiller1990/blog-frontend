<template>
  <div class="posts">
    <div v-for="post in posts">{{ post.title }}</div>
  </div>
</template>

<script>
  import axios from 'axios'

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
      fetchPosts () {
        // return axios.get('https://pastebin.org/get')
        return axios.get('http://localhost:3000/posts')
          .then((response) => {
            this.posts = response.data.result
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      }
    }
  }
</script>
