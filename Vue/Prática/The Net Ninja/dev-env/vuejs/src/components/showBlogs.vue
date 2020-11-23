<template>
  <div id="show-blogs">
    <h1>List of blogs</h1>
    <div v-for="(val, key) in blogs" v-bind:key="key" class="single-blog">
      <h3>{{ val.title }}</h3>
      <article>
        {{ val.body }}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {console.log(json); this.blogs = json;});
  }
}
</script>

<style scoped>

</style>