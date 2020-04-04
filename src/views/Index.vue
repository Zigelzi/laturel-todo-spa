<template>
  <div>
    <nav class="nav">
      <router-link :to="{ name: 'allProjects' }" class="nav-link"
        >Project list</router-link
      >
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
