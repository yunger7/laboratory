<template>
  <header>
    <h1>{{ title }}</h1>
  </header>  
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue Heroes'
    }
  }
}
</script>

<style scoped>
header {
  padding: 10px;
}

h1 {
  text-align: center;
}
</style>