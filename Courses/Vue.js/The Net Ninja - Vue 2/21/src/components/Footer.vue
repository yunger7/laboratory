<template>
  <footer>
    <p v-html="copyright"></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: '&copy; Copyright <a href="https://github.com/yunger7" target="_BLANK">yunger7</a> 2020'
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