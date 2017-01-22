<template>
  <div class="container">
    <h2>Create an account</h2>
    <input placeholder="Username" class="username" v-model="username" />
    <input placeholder="Password" class="password" v-model="password" type="password" />
    <button @click="createAccount">
      Create Account
    </button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      createAccount () {
        return axios.post('http://localhost:3000/users/create', {
          username: this.username,
          password: this.password
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
  input {
    font-size: 2em;
    display: block;
    width: 20em;
    margin-left: 5em;
    margin-bottom: 0.1em;
  }

  .container {
    text-align: center;
  }
</style>
