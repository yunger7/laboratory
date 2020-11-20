var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: "Vue App 1"
  },
  methods: {

  },
  computed: {
    greet: function() {
      return "Hello from app one \(￣︶￣*\))";
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: "Vue App 2"
  },
  methods: {
    changeTitle: function() {
      one.title = "App 2 gang rise up ヽ（≧□≦）ノ";
    }
  },
  computed: {
    greet: function() {
      return "App two says hi (*￣3￣)╭";
    }
  }
});

// two.title = "No app gang rise up ╰（‵□′）╯";