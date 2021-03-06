<template>
  <div id="show-blogs">
    <h1>List of blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="(val, key) in filteredBlogs" v-bind:key="key" class="single-blog">
      <router-link v-bind:to="'/blog/' + val.id"><h3>{{ val.title }}</h3></router-link>
      <article>
        {{ val.body }}
      </article>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => {
      this.blogs = data.slice(0, 10);
    });
  },
  methods: {

  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    'to-uppercase': function(value) {
      return value.toUpperCase();
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