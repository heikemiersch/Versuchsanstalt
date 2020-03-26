<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // es6 code in action: data object is a function
  data() {
    return {
      title: "My Tech Skills"
    };
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
