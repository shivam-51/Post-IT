<template>
  <footer fixed:bottom id="main-footer">
    <div class="container">
      <div class=" text-center py-4" style="color: white">
        <h3>Post - IT</h3>
        <p>Made with <i class="fas fa-heart"></i> by students of IT</p>
        <p>&copy; Copyright 2020</p>
        <span class="bottom">
          This is a blogging site made only for representation purposes and is
          in no way official from either the institute or the department. The
          accuracy of any information shown in the website is not guaranteed by
          the Team Members or any person whosoever.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  /* margin-top: 50px; */
  height: 300px;
  background-color: #162029;
}
.bottom {
  color: yellow;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
}
</style>
