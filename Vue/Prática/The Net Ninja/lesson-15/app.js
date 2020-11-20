Vue.component('greeting', {
  template: '<p>My name is {{ name }} <button v-on:click="changeName">Change name</button></p>',
  data: function() {
    return {
      name: "Ryuunosuke"
    }
  },
  methods: {
    changeName: function() {
      this.name = "Luis";
    }
  }
});

new Vue({
  el: '#vue-app-one'
});

new Vue({
  el: '#vue-app-two'
});