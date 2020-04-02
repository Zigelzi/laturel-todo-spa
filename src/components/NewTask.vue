<template>
  <div
    class="new-item rounded-border-5 test-height"
    @click.self="toggleInputVisibility"
  >
    <div v-if="!inputVisible" class="new-item-text">
      New task
    </div>
    <div v-if="inputVisible" class="new-item-input">
      <input
        v-model="task.name"
        type="text"
        name=""
        id=""
        placeholder="What needs to be done?"
      />
      <SvgIcon iconType="add" iconSize="icon-m" class="new-item-icon" />
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  components: {
    SvgIcon
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
    }
  }
};
</script>
