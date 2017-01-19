<template>
  <div>
    <h2>{{ post.title }}</h2>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['post'],
    data () {
      return {
        content: null
      }
    },
    created () {
      this.fetchPostContent()
    },
    methods: {
      fetchPostContent () {
        return axios.get(`http://localhost:3000/posts/${this.post.id}`)
          .then((response) => {
            this.content = response.data
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      }
    }
  }
</script>
