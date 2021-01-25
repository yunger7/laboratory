<template>
  <div id="show-blogs">
    <h1>List of blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="(val, key) in filteredBlogs" v-bind:key="key" class="single-blog">
      <router-link v-bind:to="'/blog/' + val.id"><h3>{{ val.title }}</h3></router-link>
      <article>
        {{ val.content }}
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
    fetch('https://vuejs-course-c2bd5.firebaseio.com/posts.json').then(response => response.json()).then(data => {
      let blogsArray = [];
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      // console.log(this.blogs);
      // console.log(typeof(this.blogs));
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