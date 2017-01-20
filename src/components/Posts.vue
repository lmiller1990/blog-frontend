<template>
  <div>
    <router-link v-for="post in posts" :to="{ name: 'post', params: { id: post.id }}">
      {{ post.title }}
    </router-link>
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
        console.log('Fetching posts')
        return axios.get('http://191.167.3.2/posts')
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
