<template>
  <div id="app">
    <ul>
      <li v-for="(hero, index) in heroes" :key="index">{{ hero }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      heroes: ['Saitama', 'Tatsumaki', 'Midoriya']
    }
  }
}
</script>

<style>

</style>
