<template>
  <div>
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
      axios.get('http://localhost:3000/posts')
        .then((res) => {
          this.posts = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
</script>
