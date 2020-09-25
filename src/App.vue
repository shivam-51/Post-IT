<template>
    <div id="app">
<<<<<<< HEAD
       <router-view />
=======
        <Navbar title="Post-IT" />
        <router-view />
        <Footer />
>>>>>>> 9acc13c67d76efd0facbd36d4a1e245ce790979e
    </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
    name: "app",
    components: {
        Footer,
        Navbar,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
