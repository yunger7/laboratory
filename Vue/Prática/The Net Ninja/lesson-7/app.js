new Vue({
  el: '#vue-app',
  data: {
    name: "Joseph",
    age: 18
  },
  methods: {
    logName: function() {
      console.log('You entered your name');
    },
    logAge: function() {
      console.log('You entered your age');
    }
  }
});