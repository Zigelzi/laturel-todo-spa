<template>
  <div
    class="task-container"
    @click="toggleAdditionalInformationVisibility"
    :class="{ 'task-complete': taskCompleted }"
  >
    <div class="assignees-indicator-container">
      <span
        v-for="(assignees, index) in task.assignees"
        :key="index"
        class="assignee-indicator"
      ></span>
    </div>
    <div class="task-details">
      <div class="task-name">
        <label>{{ task.name }}</label>
      </div>
      <div class="task-checkbox">
        <input
          :id="taskId"
          type="checkbox"
          v-model="taskCompleted"
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
          <div class="task-assignee-buttons">
            <div class="task-join" v-if="!isAssigned">
              <button class="btn btn-primary" @click.stop="addAssigneeToTask">
                Join
              </button>
            </div>
            <div
              class="task-leave"
              v-if="isAssigned"
              @click.stop="removeAssigneeFromTask"
            >
              <button class="btn btn-primary">
                Leave
              </button>
            </div>
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
import axios from "axios";

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
      taskCompleted: this.task.completed,
      currentUser: {
        id: null,
        name: ""
      },
      showAdditionalInformation: false,
      isAssigned: false
    };
  },
  methods: {
    toggleAdditionalInformationVisibility() {
      this.showAdditionalInformation = !this.showAdditionalInformation;
    },
    updateTask() {
      const path = "/task/" + this.task.id;
      let task = this.task;
      task.completed = this.taskCompleted;

      axios
        .put(path, task)
        .then(() => {
          this.$emit("taskDataUpdated");
        })
        .catch(error => {
          console.error(error);
        });
    },
    addAssigneeToTask() {
      const path = "/task/add_assignee";
      const task = this.task;
      const user = this.getCurrentUserFromLocalStorage();
      const payload = {
        user: user,
        task: task
      };
      axios
        .post(path, payload)
        .then(() => {
          this.$emit("taskDataUpdated");
        })
        .catch(error => {
          console.error(error);
        });
    },
    removeAssigneeFromTask() {
      const path = "/task/remove_assignee";
      const task = this.task;
      const user = this.getCurrentUserFromLocalStorage();
      const payload = {
        user: user,
        task: task
      };
      axios
        .post(path, payload)
        .then(() => {
          this.$emit("taskDataUpdated");
        })
        .catch(error => {
          console.error(error);
        });
    },
    getCurrentUserFromLocalStorage() {
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      this.currentUser = user;
      return user;
    },
    checkIfUserIsAssignedToTask() {
      const assignees = this.task.assignees;
      const currentUser = this.currentUser;
      let isAssigned = assignees.some(assignee => {
        if (assignee.id === currentUser.id) {
          return true;
        }
      });
      this.isAssigned = isAssigned;
    }
  },
  computed: {
    noAssignees() {
      if (this.task.assignees.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    taskCompleted() {
      this.updateTask();
      this.$emit("taskChanged", this.task);
    },
    task() {
      this.checkIfUserIsAssignedToTask();
    }
  },
  mounted() {
    this.getCurrentUserFromLocalStorage();
    this.checkIfUserIsAssignedToTask();
  }
};
</script>
