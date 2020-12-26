<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>  
</template>

<script>
export default {
  props: {
    title: {type: String}
  },
  data() {
    return {
      
    }
  },
  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', 'Vue Wizards');
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