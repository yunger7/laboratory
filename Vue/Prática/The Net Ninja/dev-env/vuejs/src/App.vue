<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'First Vue app'
    }
  },
  methods: {
    greeting (time = 'Morning') {
      return 'Good ' + time + '!';
    }
  }
}
</script>

<style>

</style>
