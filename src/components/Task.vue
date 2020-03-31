<template>
  <div class="task-container">
    <input
      :id="taskId"
      type="checkbox"
      v-model="task.completed"
      class="task-input"
    />
    <label :for="taskId" class="task-label">{{ task.name }}</label>
  </div>
</template>
<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      taskId: "task-" + this.$vnode.key
    };
  },
  methods: {}
};
</script>
