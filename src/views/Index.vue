<template>
  <div>
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>
<script>
//eslint-disable-next-line
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Test project",
          description: "Project for testing purposes"
        },
        {
          id: 2,
          name: "Test project",
          description: "Project for testing purposes"
        }
      ]
    };
  }
};
</script>
