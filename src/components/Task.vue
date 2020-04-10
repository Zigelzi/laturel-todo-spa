<template>
  <div
    class="task-container"
    @click="toggleAdditionalInformationVisibility"
    :class="{ 'task-complete': task.completed }"
  >
    <div class="task-details">
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
    <transition name="expand">
      <div class="task-additional-information" v-if="showAdditionalInformation">
        <div class="assignee-list">
          <SvgIcon iconType="people" iconSize="icon-s" />
          <div class="no-assignees" v-if="noAssignees">
            Nobody on this yet...
          </div>
          <div
            v-for="assignee in task.assignees"
            :key="assignee.id"
            class="assignee"
          >
            {{ assignee.name }}
          </div>
          <div class="task-join">
            <div class="btn btn-primary">Join</div>
          </div>
        </div>
        <div class="task-comments">
          <div class="comment-section">
            <SvgIcon iconType="chatBox" iconSize="icon-s" />
          </div>
          <div v-for="comment in task.comments" :key="comment.id">
            {{ comment.content }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss">
.expand-enter,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-leave,
.expand-enter-to {
  max-height: 900px;
  opacity: 1;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.2s, opacity 0.1s;
}
</style>
<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  components: {
    SvgIcon
  },
  props: {
    task: Object
  },
  data() {
    return {
      taskId: "task-" + this.task.id,
      showAdditionalInformation: false
    };
  },
  methods: {
    toggleAdditionalInformationVisibility() {
      this.showAdditionalInformation = !this.showAdditionalInformation;
    }
  },
  computed: {
    completed() {
      return this.task.completed;
    },
    noAssignees() {
      if (this.task.assignees.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    completed() {
      this.$emit("taskChanged", this.task);
    }
  }
};
</script>
