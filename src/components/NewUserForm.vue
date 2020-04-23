<template>
  <div>
    <div class="welcome-message">
      <h2 class="text-20 fw-normal m-top-0">{{ $t("newUserForm.title") }}</h2>
      <p>{{ $t("newUserForm.description") }}</p>
    </div>
    <form class="new-user-form">
      <label class="input-field">
        <span class="input-label">{{ $t("newUserForm.name") }}</span>
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
        {{ $t("newUserForm.setUsername") }}
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
