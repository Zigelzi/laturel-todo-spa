<template>
  <div>
    <NewUserForm v-if="!userExists" @userSaved="checkForExistingUser" />
    <div v-if="userExists">
      <nav class="nav">
        <router-link :to="{ name: 'allProjects' }" class="nav-link"
          >Project list</router-link
        >
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
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
        this.user = JSON.parse(localStorage.user);
        this.userExists = true;
      } else {
        this.userExists = false;
      }
    }
  },
  mounted() {
    this.checkForExistingUser();
  }
};
</script>
