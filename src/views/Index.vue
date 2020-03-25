<template>
  <div>
    <div class="new-project rounded-border-5">
      New project
    </div>
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
      ],
      test: {}
    };
  },
  methods: {
    sendData() {
      const path = "/project";
      axios
        .post(path, {
          name: "Test project",
          description: "Project for testing purposes"
        })
        .then(res => {
          this.test = res.data;
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error);
        });
    }
  },
  created() {
    this.sendData();
  }
};
</script>
