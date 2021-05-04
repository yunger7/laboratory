<template>
  <div id="app">
    <router-view name="header" @updateHeroes="updateHeroes($event)"></router-view>
    <router-view name="heroes" :heroes="heroes"></router-view>
    <router-view name="details" :heroes="heroes"></router-view>
    <router-view name="footer" @updateHeroes="updateHeroes($event)" :total="total" :currentPage="currentPage"></router-view>
  </div>
</template>

<script>
/* eslint-disable */

import Header from './components/Header.vue'
import Heroes from './components/Heroes.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-heores': Heroes,
    'app-footer': Footer
  },
  data() {
    return {
      heroes: [],
      total: 1,
      currentPage: 1,
      isSearching: false,
      searchingFor: ""
    }
  },
  methods: {
    updateHeroes: function(event = 0) {
      const marvelApi = 'https://gateway.marvel.com:443/v1/public/characters?';
      const apiKey = 'b4fd3a8d4dc53bd45eee66fbc7a76204';
      const limit = '4';

      if (typeof(event) == "object") {
        if (event.action == "changePage") {
          this.currentPage = event.value;
          let offset = this.currentPage * Number(limit) - limit;

          if (this.isSearching) {
            var api = marvelApi + 'nameStartsWith=' + encodeURI(this.searchingFor) + '&limit=' + limit + '&offset=' + offset + '&apikey=' + apiKey;
          } else {  
            var api = marvelApi + 'limit=' + limit + '&offset=' + offset + '&apikey=' + apiKey;
          }
        } else if (event.action == "searchHeroes") {
          this.currentPage = 1;

          if (event.value == "") {
            var api = marvelApi + 'limit=' + limit + '&apikey=' + apiKey;
          } else {
            let name = event.value;
            this.searchingFor = name;
            var api = marvelApi + 'limit=' + limit + '&nameStartsWith=' + encodeURI(name) + '&apikey=' + apiKey;
          }
          this.$router.push('/');
        }
      } else {
        // First call
        var api = marvelApi + 'limit=' + limit + '&apikey=' + apiKey;
      }

      // Fetch API
      fetch(api).then(res => {
        // Check if user is searching
        this.isSearching = res.url.includes("nameStartsWith");

        return res.json();
      }).then((result) => {
        this.heroes = result;
        this.total = Math.ceil(result.data.total / limit);
      });
      
    }
  },
  created() {
    this.updateHeroes();
  }
}
</script>

<style>
body {
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app {
  width: 500px;
  background-color: #1B1B1B;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

h1, h2, h3, h4, h5, h6, p {
  color: #1B1B1B;
}

p {
  line-height: 1.2rem;
  font-size: 0.9rem;
}

.icon-red {
  color: #ED1D24
}
</style>
