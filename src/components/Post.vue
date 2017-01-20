<template>
  <div>
    <button v-if="!editing" @click="edit">Edit</button>
    <div v-if="post">
      <input :style="isEditing" class="post title" v-model="post.title" />
      <textarea :style="isEditing" class="post content" v-model="post.content"></textarea>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        post: null,
        editing: false
      }
    },
    created () {
      this.fetchPostContent()
    },
    watch: {
      '$route': 'fetchPostContent'
    },
    computed: {
      isEditing () {
        return this.editing
          ? { }
          : { 'border': 'none', 'outline': 'none' }
      }
    },
    methods: {
      edit () {
        this.editing = true
      },
      fetchPostContent () {
        return axios.get(`http://191.167.3.2/posts/${this.$route.params.id}`)
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
    width: 50%;
    text-align: center;
    font-size: 2.8em;
  }

  textarea {
    width: 50%;
    text-align: center;
    font-size: 1.7em;
  }
</style>
