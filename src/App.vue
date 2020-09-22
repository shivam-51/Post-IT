<template>
    <div id="app">
        <Navbar title="Post-IT" />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0a131b;
    margin-top: 0px;
}
</style>
