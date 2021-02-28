<template>
  <footer>
    <p><span v-html="copyright"></span> | <span v-html="author"></span></p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {type: String}
  },
  data() {
    return {
      copyright: '&copy; Copyright ' + this.title,
      author: 'By <a href="https://github.com/yunger7" target="_BLANK">yunger7</a> 2020'
    }
  }
}
</script>

<style scoped>
footer {
  padding: 10px;
}

p {
  text-align: center;
  font-style: italic;
}
</style>