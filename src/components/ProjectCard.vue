<template>
  <div class="project-card rounded-border-5">
    <h1 class="project-card-title">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <button class="btn btn-danger" @click="deleteProject">Delete</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    project: Object
  },
  methods: {
    deleteProject() {
      const path = "/project/" + this.project.id;
      axios
        .delete(path)
        .then(res => {
          this.$emit("projectDeleted", res.data);
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error);
        });
    }
  }
};
</script>
