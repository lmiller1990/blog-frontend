<template>
  <div>
    Create a post
    <input v-model="title" />
    <input v-model="content" />
    <button @click="submitPost">Submit</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        title: 'Title',
        content: 'Content'
      }
    },
    created () {
      console.log('Created new post form')
    },
    methods: {
      submitPost () {
        return axios.post('http://191.167.3.2/posts/create', {
          title: this.title,
          content: this.content
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
