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
</style>
