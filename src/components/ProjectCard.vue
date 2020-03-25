<template>
  <div class="project-card rounded-border-5">
    <h1 class="project-card-title">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    project: Object
  }
};
</script>
