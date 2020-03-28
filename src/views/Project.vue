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
import Task from "@/components/Task";

export default {
  components: {
    Task
  },
  data() {
    return {
      project: this.$route.params.project
    };
  },
  methods: {
    getProject() {}
  }
};
</script>
