<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article> {{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>Category</p>
    <ul>
      <li v-for="(val, key) in blog.categories" v-bind:key="key">{{ val }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    fetch('https://vuejs-course-c2bd5.firebaseio.com/posts/' + this.id + '.json').then(response => response.json()).then(data => this.blog = data);
  }
}
</script>

<style>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>