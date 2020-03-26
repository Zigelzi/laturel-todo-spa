<template>
  <div class="project-card rounded-border-5">
    <label for="project-name" class="input-field">
      <input
        type="text"
        id="project-name"
        placeholder="Project name"
        v-model="project.name"
      />
      <span class="input-border"></span>
    </label>

    <label for="project-description" class="input-field"
      ><textarea
        name="project-description"
        id="project-description"
        cols="25"
        rows="5"
        placeholder="Project description"
        v-model="project.description"
      ></textarea>
      <span class="input-border"></span
    ></label>
    <button @click="submitProject" class="btn btn-primary">Create</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      project: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    submitProject() {
      const path = "/project";
      const payload = this.project;

      axios
        .post(path, payload)
        .then(res => {
          this.$emit("projectAdded", res.data);
        })
        .catch(error => {
          // esline-disable-next-line
          console.error(error);
        });
    }
  }
};
</script>
