<template>
  <div id="app">
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Form one</button>
    <button v-on:click="component = 'form-two'">Form two</button>
  </div>
</template>

<script>
import formOne from './components/formOne'
import formTwo from './components/formTwo'

export default {
  name: 'app',
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      component: 'form-one'
    }
  }
}
</script>

<style>
  h2 {
    color: midnightblue;
  }
</style>
