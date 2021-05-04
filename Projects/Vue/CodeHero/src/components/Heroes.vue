<template>
  <div id="heroes">
    <div class="display-hero" v-for="(hero, index) in heroes.data.results" :key="index">
      <router-link v-bind:to="'/hero/' + hero.id">
        <div class="hero-img" :style="{backgroundImage: 'url(' + hero.thumbnail.path + '.' + hero.thumbnail.extension + ')'}">
        </div>
        <div class="hero-description">
          <h4>{{ hero.name }}</h4>
          <p>{{ hero.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heroes']
}
</script>

<style scoped>
a {
  text-decoration: none;
}

#heroes {
  width: 100%;
}

.display-hero {
  padding: 0 1rem;
  margin-top: 1rem;
}

.hero-img {
  position: relative;

  height: 150px;
  background-repeat: no-repeat;
  background-position: center 35%;
  background-size: cover;
}

.hero-description {
  position: relative;

  background-color: #fff;
  padding: 0.5rem 0.75rem 0.25rem 0.75rem;
}

/* Styles for sharp corners */
.hero-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-right: 60px solid transparent;
  border-top: 45px solid #1B1B1B;
  width: 0;
}

.hero-description::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-left: 60px solid transparent;
  border-bottom: 45px solid #1B1B1B;
  width: 0;
}
</style>
