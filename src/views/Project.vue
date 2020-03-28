<template>
  <div>
    <div class="project-heading">
      <h1>{{ project.name }}</h1>
      <p class="subtext">{{ project.description }}</p>
    </div>
    <div>
      <Task />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Task from "@/components/Task";

export default {
  props: {
    projectId: [String, Number]
  },
  components: {
    Task
  },
  data() {
    return {
      project: {}
    };
  },
  methods: {
    getProject() {
      const path = "/project/" + this.projectId;
      axios
        .get(path)
        .then(res => {
          this.project = res.data.project;
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error);
        });
    }
  },
  created() {
    this.getProject();
  }
};
</script>
