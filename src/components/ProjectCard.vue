<template>
  <div class="project-card rounded-border-5">
    <div @click="goToProject">
      <h1 class="project-card-title">{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: Object
  },
  methods: {
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
