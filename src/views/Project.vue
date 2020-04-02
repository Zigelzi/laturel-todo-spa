<template>
  <div class="single-project">
    <div class="project-heading-container">
      <h1 class="project-heading">{{ project.name }}</h1>
      <p class="subtext">{{ project.description }}</p>
    </div>
    <div>
      <Task :task="task" v-for="(task, index) in tasks" :key="index" />
    </div>
    <NewTask />
  </div>
</template>
<script>
import axios from "axios";
import Task from "@/components/Task";
import NewTask from "@/components/NewTask";

export default {
  props: {
    projectId: [String, Number]
  },
  components: {
    Task,
    NewTask
  },
  data() {
    return {
      project: {},
      tasks: [
        {
          name: "Do some task",
          completed: false
        },
        {
          name: "Do another task",
          completed: false
        }
      ]
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
