<template>
  <div class="new-item rounded-border-5" @click.self="toggleInputVisibility">
    <div
      v-if="!inputVisible"
      class="new-item-text"
      @click="toggleInputVisibility"
    >
      <SvgIcon iconType="add" iconSize="icon-m" />
    </div>
    <div v-if="inputVisible" class="new-item-input">
      <input
        v-model="task.name"
        type="text"
        name=""
        id=""
        :placeholder="$t('newTask.placeholder')"
        @keyup.enter="createTask"
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
      if (!this.emptyTaskName()) {
        const path = "/task";
        const task = this.task;
        task.project_id = this.projectId;

        axios
          .post(path, task)
          .then(res => {
            this.$emit("taskAdded", res.data);
            this.task = {};
          })
          .catch(error => {
            //eslint-disable-next-line
            console.error(error);
          });
      }
    },
    emptyTaskName() {
      if (this.task.name === "") {
        console.error("Can't add task with empty name");
        return true;
      }
    }
  }
};
</script>
