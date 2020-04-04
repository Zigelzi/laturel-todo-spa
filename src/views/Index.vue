<template>
  <div>
    <nav class="nav">
      <router-link :to="{ name: 'allProjects' }" class=""
        >Project list</router-link
      >
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
