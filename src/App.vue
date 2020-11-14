<template>
  <div id="app">
    <Loading :isLoading="isLoading" />
    <main v-if="!isLoading">
      <Navbar title="Post-IT" />
      <div style="height:75px "></div>
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./views/Loading";

export default {
  name: "app",
  components: {
    Footer,
    Navbar,
    Loading
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
};
</script>

<style scoped>
.mt-5 {
  margin-top: 20px;
  padding-top: 15px;
}
</style>
