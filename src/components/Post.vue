<template>
  <div>
    <div v-if="post">
      <div class="post title">
        {{ post.title }}
      </div><br />
      <div v-for="line in post.content.split('\n')" class="post content">
        {{ line }}<br />
      </div>
    </div>
    <button @click="edit">Edit</button>
  </div>
</template>

<script>
  import axios from 'axios'

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
      edit () {
        this.$router.push(`/posts/edit/${this.$route.params.id}`)
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
  .post {
    margin-left: 10%;
    width: 80%;
    white-space: normal;
  }

  .title {
    text-align: center;
    font-size: 2.7em;
  }

  .content {
    text-align: justify;
    font-size: 1.7em;
  }
</style>
