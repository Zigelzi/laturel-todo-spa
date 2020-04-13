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
          v-for="task in project.tasks"
          :key="task.id"
          @taskChanged="reorderTasks"
          @assigneesUpdated="getProject"
        />
      </div>
      <div class="task-list">
        <Task
          :task="completedTask"
          v-for="completedTask in completedTasks"
          :key="completedTask.id"
          @taskChanged="reorderTasks"
          @assigneesUpdated="getProject"
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
      completedTasks: []
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
    },
    reorderTasks(task) {
      if (task.completed) {
        this.removeTaskFromArray(task, this.project.tasks);
        this.completedTasks.push(task);
      }
      if (!task.completed) {
        this.removeTaskFromArray(task, this.completedTasks);
        this.project.tasks.push(task);
      }
    },
    removeTaskFromArray(task, taskArray) {
      let taskIndex = taskArray.findIndex(item => item.id === task.id);
      taskArray.splice(taskIndex, 1);
    }
  },
  created() {
    this.getProject();
  }
};
</script>
