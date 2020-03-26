<template>
  <footer>
    <p>{{copyright }}</p>
  </footer>
</template>

<script>
export default {
  // es6 code in action: data object is a function
  data() {
    return {
      copyright: "Copyright 2020 Heike"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
