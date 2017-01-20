<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'

export default {
  components: {
    BlogHeader
  }
}
</script>

<style>
div {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
