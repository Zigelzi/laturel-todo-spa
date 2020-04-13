<template>
  <div>
    <div>
      <p>Welcome to Laturel ToDo!</p>
      <p>Set your username to start creating and participating to projects!</p>
    </div>
    <form class="new-user-form">
      <label class="input-field"
        >Name
        <input
          type="text"
          v-model="user.name"
          id="user-name"
          placeholder="Matti Meikäläinen"
          @keyup.enter.prevent="addNewUser"
        />
        <span class="input-border"></span>
      </label>
      <button class="btn btn-primary" @click.prevent="addNewUser">
        Set username
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: ""
      }
    };
  },
  methods: {
    addNewUser() {
      const path = "/user";
      const user = this.user;
      axios
        .post(path, user)
        .then(res => {
          this.saveUserName(res.data.user);
        })
        .catch(error => {
          console.error(error);
        });
    },
    saveUserName(user) {
      this.user = user;
      localStorage.user = JSON.stringify(user);
      this.$emit("userSaved", user);
    }
  }
};
</script>
