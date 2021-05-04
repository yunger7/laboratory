<template>
  <div id="header" :class="{search: search.active}">
    <span v-show="!search.active"><b-icon-list class="icon icon-red" font-scale="2"></b-icon-list></span>
    <router-link to="/"><img class="marvel-img" v-show="!search.active" src="../assets/logo.png" alt="Marvel logo" width="150px" height="50px"></router-link>
    <b-form-input ref="searchInput" class="searchBar" v-show="search.active" v-model="search.text" @keyup.enter="searchHero" @keyup.esc="search.active = !search.active; search.text = ''" placeholder="Search by name"></b-form-input>
    <span @click="search.active = !search.active; focusInput()" class="search-button"><b-icon-search class="icon icon-red" font-scale="2"></b-icon-search></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: {
        active: false,
        text: ''
      }
    }
  },
  methods: {
    searchHero () {
      this.$emit('updateHeroes', {action: 'searchHeroes', value: this.search.text})
      this.search.active = false
      this.search.text = ''
    },
    focusInput () {
      this.$nextTick(() => this.$refs.searchInput.focus())
    }
  }
}
</script>

<style scoped>
#header {
  padding: 1rem 1.5rem;
  width: 100%;
  height: 75px !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header.search {
  justify-content: flex-end;
}

.marvel-img {
  cursor: pointer;
}

.search-button {
  margin-left: 1rem;
  cursor: pointer;
}

.searchBar:focus {
  box-shadow: 0 0 0 0.2rem rgba(237, 29, 36, 0.25);
  /* box-shadow: #ED1D24; */
  border-color: rgb(237, 29, 36);
}
</style>
