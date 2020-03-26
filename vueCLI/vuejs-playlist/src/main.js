import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  // this takes the imported root component App and renders it in the #app
  render: h => h(App)
});
