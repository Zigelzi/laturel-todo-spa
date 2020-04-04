<template>
  <div
    class="new-item rounded-border-5 test-height"
    @click.self="toggleInputVisibility"
  >
    <div v-if="!inputVisible" class="new-item-text">
      <SvgIcon iconType="add" iconSize="icon-m" />
    </div>
    <div v-if="inputVisible" class="new-item-input">
      <input
        v-model="task.name"
        type="text"
        name=""
        id=""
        placeholder="What needs to be done?"
      />
      <div @click="createTask">
        <SvgIcon iconType="add" iconSize="icon-m" class="" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SvgIcon from "@/components/SvgIcon";
export default {
  components: {
    SvgIcon
  },
  props: {
    projectId: [String, Number]
  },
  data() {
    return {
      inputVisible: false,
      task: {
        name: ""
      }
    };
  },
  methods: {
    toggleInputVisibility() {
      this.inputVisible = !this.inputVisible;
    },
    createTask() {
      const path = "/task";
      const task = this.task;
      task.project_id = this.projectId;

      axios
        .post(path, task)
        .then(res => {
          this.$emit("taskAdded", res.data);
        })
        .catch(error => {
          //eslint-disable-next-line
        console.error(error);
        });
    }
  }
};
</script>
