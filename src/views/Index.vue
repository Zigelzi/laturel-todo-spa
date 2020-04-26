<template>
  <div>
    <NewUserForm v-if="!userExists" @userSaved="checkForExistingUser" />
    <div v-if="userExists">
      <!-- <nav class="nav">
        <router-link :to="{ name: 'allProjects' }" class="nav-link">{{
          $t("nav.title")
        }}</router-link>
      </nav> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NewUserForm from "@/components/NewUserForm";

export default {
  components: {
    NewUserForm
  },
  data() {
    return {
      user: {
        id: null,
        name: ""
      },
      userExists: false
    };
  },
  methods: {
    checkForExistingUser() {
      if (localStorage.user) {
        const user = JSON.parse(localStorage.user);
        this.getUser(user);
      } else {
        this.userExists = false;
      }
    },
    getUser(user) {
      const path = "/user/" + user.id;
      const errorMessage = "Queried user was not found";
      let errorReseponseMessage = "";

      axios
        .get(path)
        .then(res => {
          this.user = res.data.user;
          this.userExists = true;
        })
        .catch(error => {
          errorReseponseMessage = error.response.data.message;
          if (errorReseponseMessage === errorMessage) {
            localStorage.removeItem("user");
            this.userExists = false;
          }
        });
    }
  },
  mounted() {
    this.checkForExistingUser();
  }
};
</script>
