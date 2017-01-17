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
    },
    methods: {
      fetchPosts () {
        console.log('Executing ajax')
        return axios.get('https://pastebin.org/get')
          .then((response) => {
            console.log('Ajax successful:', response)
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      }
    }
  }
</script>
