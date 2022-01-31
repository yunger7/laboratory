<template>
  <div id="show-blogs">
    <h1>List of blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="(val, key) in filteredBlogs" v-bind:key="key" class="single-blog">
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
      blogs: [],
      search: ''
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {console.log(json); this.blogs = json;});
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>