<template>
  <div class="container">
    <h2>Login</h2>
    <input placeholder="Username" class="username" v-model="username" />
    <input placeholder="Password" class="password" v-model="password" type="password" />
    <br /> 
    <button @click="login"> 
      Login 
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
      login () {
        return axios.post('http://localhost:3000/users/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            this.$store.commit('SET_LOGGED_IN')
            this.$router.push('/')
          }
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
    width: 50%;
    text-align: center;
    font-size: 1.7em;
  }

  .container {
    text-align: center;
  }
</style>
