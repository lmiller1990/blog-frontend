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
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      createAccount () {

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
