<template>
  <div class="project-card rounded-border-5">
    <div @click="goToProject">
      <h1 class="project-card-title">{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>

    <button class="btn btn-danger" @click.stop="deleteProject">Delete</button>
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
    },
    goToProject() {
      this.$router.push({
        name: "singleProject",
        params: {
          projectId: this.project.id,
          project: this.project
        }
      });
    }
  }
};
</script>
