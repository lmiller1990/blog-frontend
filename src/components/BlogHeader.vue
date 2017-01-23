<template>
  <div>
    <h2>Welcome to Lachlan's Blog</h2>
    <router-link to="/Posts">Posts</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/Resume">Resume</router-link>
    <router-link v-if="$store.state.loggedIn" to="/posts/new">New Post</router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 1.125em;
  }
</style>

