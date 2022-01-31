<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-heroes v-bind:heroes="heroes"></app-heroes>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Heroes from './components/Heroes.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-heroes': Heroes
  },
  data () {
    return {
      heroes: [
        {name: 'Jonathan Joestar', skill: 'Ripple', show: false},
        {name: 'Joseph Joestar', skill: 'Show-off', show: false},
        {name: 'Johnny Joestar', skill: 'Spin', show: false},
        {name: 'Giorno Giovanna', skill: 'Stand user', show: false},
        {name: 'Jotaro Kujo', skill: 'Stand user', show: false}
      ],
      title: 'Vue Heroes'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
