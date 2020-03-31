<template>
  <div class="new-item rounded-border-5" @click.self="toggleInputVisibility">
    <div v-if="!inputVisible">
      New task
    </div>
    <div v-if="inputVisible" class="new-item-input">
      <input type="text" name="" id="" placeholder="What needs to be done?" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputVisible: false
    };
  },
  methods: {
    toggleInputVisibility() {
      this.inputVisible = !this.inputVisible;
    }
  }
};
</script>
