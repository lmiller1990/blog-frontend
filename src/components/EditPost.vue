<template>
  <div v-if="post">
    <h2>Edit a post</h2>
    <textarea class="post title" v-model="post.title">
    </textarea>
    <textarea @keyup="resize" class="post content" v-model="post.content">
    </textarea></br />
    <button @click="savePost">Update Post</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import autosize from 'autosize'

  export default {
    data () {
      return {
        post: null
      }
    },
    created () {
      this.fetchPost()
    },
    watch: {
      '$route': 'fetchPost'
    },
    methods: {
      resize (event) {
        autosize(event.srcElement)
      },
      savePost () {
        return axios.post(`http://localhost:3000/posts/update/${this.$route.params.id}`, {
          title: this.post.title,
          content: this.post.content
        })
        .then(response => {
          this.$router.push(`/posts/${this.$route.params.id}`)
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      },
      fetchPost () {
        return axios.get(`http://localhost:3000/posts/${this.$route.params.id}`)
          .then((response) => {
            this.post = response.data[0]
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      }
    }
  }
</script>

<style scoped>
  input {
    width: 80%;
    text-align: justify;
    font-size: 2.8em;
  }

  textarea {
    width: 80%;
    text-align: justify;
    font-size: 1.7em;
  }
</style>
