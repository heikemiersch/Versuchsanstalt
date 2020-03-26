<template>
  <div>
    <app-header></app-header>
    <app-skills></app-skills>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Skills from "./components/Skills.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-skills": Skills
  },
  // es6 code in action: data object is a function
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
