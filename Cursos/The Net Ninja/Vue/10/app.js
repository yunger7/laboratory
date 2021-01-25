new Vue({
  el: '#vue-app',
  data: {
    available: true,
    nearby: false
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});