<template>
  <div id="app">
    <div>
      <h2>This is test from Docker with VUE</h2>
      <p>How's life inside container?</p>
      {{ testData.message }}
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      testData: {}
    };
  },
  methods: {
    getData() {
      const path = "/sanity";
      axios
        .get(path)
        .then(res => {
          this.testData = res.data;
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
