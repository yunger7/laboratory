<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'app',
  components: {
    'add-blog': addBlog
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
