<template>
  <div id="app">
    <Navbar title="Post-IT" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "@/firebase/init";

export default {
  name: "app",
  components: {
    Footer,
    Navbar
  }
};
</script>
