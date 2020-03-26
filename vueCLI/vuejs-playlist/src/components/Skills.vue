<template>
  <div id="skills">
    <ul>
      <li v-for="skill in skills" :key="skill.id" v-on:click="skill.show=!skill.show">
        <h2>{{ skill.category }}</h2>
        <h3 v-show="skill.show">{{ skill.which }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // es6 code in action: data object is a function
  data() {
    return {
      skills: [
        {
          category: "Programming Languages",
          which: "HTML/CSS, JavaScript, Java",
          show: false
        },
        {
          category: "Frameworks",
          which: "Vue CLI, Node.js, REST API, Spring Boot",
          show: false
        },
        { category: "Databases", which: "Firebase", show: false }
      ]
    };
  }
};
</script>

<style scoped>
#skills {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
