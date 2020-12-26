<template>
  <div id="heroes">
    <ul>
      <li v-for="(hero, index) in heroes" :key="index" @click="hero.show = !hero.show">
        <h2>{{hero.name}}</h2>
        <h4 v-show="hero.show">{{ hero.skill }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroes: [
        {name: 'Jonathan Joestar', skill: 'Ripple', show: false},
        {name: 'Joseph Joestar', skill: 'Show-off', show: false},
        {name: 'Johnny Joestar', skill: 'Spin', show: false},
        {name: 'Giorno Giovanna', skill: 'Stand user', show: false},
        {name: 'Jotaro Kujo', skill: 'Stand user', show: false}
      ]
    }
  }
}
</script>

<style scoped>

#heroes{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>