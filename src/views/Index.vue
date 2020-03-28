<template>
  <div>
    <router-link :to="{ name: 'allProjects' }">Project list</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
