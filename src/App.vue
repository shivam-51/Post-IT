<template>
  <div id="app">
    <Loading :isLoading="isLoading" />
    <main v-if="!isLoading">
      <Navbar title="Post-IT" />
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
    }, 1);
  }
};
</script>
