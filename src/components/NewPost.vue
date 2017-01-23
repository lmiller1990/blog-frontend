<template>
  <div class="container">
    <h2>Create a post</h2>
    <textarea class="post title" v-model="post.title">
    </textarea>
    <textarea @keyup="resize($event)" class="post content" v-model="post.content">
    </textarea>
    <div>
      <button @click="submitPost">Submit</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import autosize from 'autosize'

  export default {
    data () {
      return {
        post: {
          title: 'Title',
          content: 'Content'
        }
      }
    },
    methods: {
      resize (event) {
        console.log(event)
        autosize(event.srcElement)
      },
      submitPost () {
        return axios.post('http://localhost:3000/posts/create', {
          title: this.post.title,
          content: this.post.content
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

<style scoped>
  textarea {
    width: 50%;
    text-align: center;
    font-size: 1.7em;
  }

  .container {
    text-align: center;
  }
</style>
