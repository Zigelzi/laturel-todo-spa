<template>
  <div class="task-container" :class="{ 'task-complete': task.completed }">
    <div class="task-name">
      <label>{{ task.name }}</label>
    </div>
    <div class="task-checkbox">
      <input
        :id="taskId"
        type="checkbox"
        v-model="task.completed"
        class="checkbox-input"
      />
      <label :for="taskId" class="checkbox-label"></label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      taskId: "task-" + this.task.id
    };
  },
  methods: {
    toggleTaskCompletion() {},
    updateTask() {}
  },
  computed: {
    completed() {
      return this.task.completed;
    }
  },
  watch: {
    completed() {
      this.$emit("taskChanged", this.task);
    }
  }
};
</script>
