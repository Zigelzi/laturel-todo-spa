<template>
  <div>
    <NewProject @projectAdded="updateState" />
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.id"
        @projectDeleted="updateState"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import NewProject from "@/components/NewProject";

export default {
  components: { ProjectCard, NewProject },
  data() {
    return {
      projects: [],
      statusMessage: {
        status: "",
        message: ""
      }
    };
  },
  methods: {
    getProjects() {
      const path = "/projects";
      axios
        .get(path)
        .then(res => {
          this.projects = res.data.projects;
        })
        .catch(error => {
          //eslint-disable-next-line
          console.error(error);
        });
    },
    updateStatusMessage(backendData) {
      this.statusMessage = backendData;
    },
    updateState(backendData) {
      this.updateStatusMessage(backendData);
      this.getProjects();
    }
  },
  created() {
    this.getProjects();
  }
};
</script>
