<template>
  <div id="details">
    <div class="hero-img" :style="{backgroundImage: 'url(' + hero.thumbnail.path + '.' + hero.thumbnail.extension + ')'}"></div>
    <h1 class="hero-name">{{ hero.name }}</h1>
    <p class="hero-description">{{ hero.description }}</p>
    <h3>Series</h3>
    <ul class="series">
      <li v-for="(val, key) in hero.series.items" v-bind:key="key">{{ val.name }}</li>
    </ul>
    <h3>More information</h3>
    <ul class="links">
      <li v-for="(link, index) in hero.urls" v-bind:key="index"><a :href="link.url" target="_BLANK">{{ captalize(link.type) }}</a></li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['heroes'],
  data () {
    return {
      id: this.$route.params.id,
      hero: []
    }
  },
  methods: {
    captalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  created () {
    // Fetch single hero
    let heroesArray = this.heroes.data.results
    for (let i in heroesArray) {
      if (heroesArray[i].id == this.id) {
        this.hero = heroesArray[i]
      }
    }
  }
}
</script>

<style scoped>
* {
  color: #fff;
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  color: #ED1D24;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.35rem 0;
}

#details {
  width: 100%;
  height: auto;
  padding: 1rem;
}

.hero-img {
  position: relative;

  height: 250px;
  margin-bottom: 1rem;

  background-repeat: no-repeat;
  background-position: center 35%;
  background-size: cover;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.links li {
  position: relative;
  background-color: #ED1D24;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: 400ms;
}

.links li:hover {
  background-color: #7E1B1F;
}

.links li a {
  text-decoration: none;
}

.links li a:hover {
  color: #fff;
}

/* Styles for sharp corners */
.links li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-right: 10px solid transparent;
  border-top: 10px solid #1B1B1B;
  width: 0;
}

.links li::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-left: 10px solid transparent;
  border-bottom: 10px solid #1B1B1B;
  width: 0;
}

</style>
