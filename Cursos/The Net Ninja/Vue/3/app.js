new Vue({
  el: '#vue-app',
  data: {
    name: 'Luís',
    age: 18
  },
  methods: {
    greeting: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});