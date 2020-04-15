<template>
  <div class="single-project">
    <div class="project-heading-container">
      <h1 class="project-heading">{{ project.name }}</h1>
      <p class="subtext">{{ project.description }}</p>
    </div>
    <div>
      <div class="task-list">
        <Task
          :task="task"
          v-for="task in incompleteTasks"
          :key="task.id"
          @taskDataUpdated="getProject"
        />
      </div>
      <div class="task-list">
        <Task
          :task="completedTask"
          v-for="completedTask in completedTasks"
          :key="completedTask.id"
          @taskDataUpdated="getProject"
        />
      </div>
    </div>
    <NewTask :projectId="projectId" @taskAdded="getProject" />
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
      incompleteTasks: [],
      completedTasks: []
    };
  },
  methods: {
    getProject() {
      const path = "/project/" + this.projectId;
      axios
        .get(path)
        .then(res => {
          let project = {};
          project = res.data.project;
          this.project = project;

          this.filterIncompleteTasks(project.tasks);
          this.filterCompleteTasks(project.tasks);
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error);
        });
    },
    filterIncompleteTasks(tasks) {
      this.incompleteTasks = tasks.filter(task => !task.completed);
    },
    filterCompleteTasks(tasks) {
      this.completedTasks = tasks.filter(task => task.completed);
    }
  },

  created() {
    this.getProject();
  }
};
</script>
