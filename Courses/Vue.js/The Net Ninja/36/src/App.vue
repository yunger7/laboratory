<template>
  <div id="app">
    <show-blogs></show-blogs>
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  name: 'app',
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
