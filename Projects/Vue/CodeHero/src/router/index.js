import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header.vue'
import Heroes from '../components/Heroes.vue'
import Footer from '../components/Footer.vue'
import Details from '../components/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        heroes: Heroes,
        footer: Footer
      }
    },
    {
      path: '/hero/:id',
      components: {
        header: Header,
        details: Details
      }
    }
  ]
})
