<template>
  <div class="component display-4">
    <p>All the blogs will be shown here.</p>
    <p>
      <router-link to="/addblog">Click here</router-link> to add a new blog.
    </p>
  </div>
</template>

<script>
export default {
  name: "allblog"
};
</script>

<style scoped>
.component {
  margin-top: 30vh;
  margin-bottom: 30vh;
}
</style>
