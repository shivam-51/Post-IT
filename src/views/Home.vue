<template>
    <div class="home">
        <!-- <Navbar title="Post-IT" /> -->
        <Carousel />
        <Intro />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Navbar from "@/components/Navbar.vue";
import Carousel from "../components/Homes/Carousel";
import Intro from "../components/Homes/Intro";
export default {
    name: "Home",
    components: {
        Carousel,
        Intro,
        // HelloWorld,
        // Navbar,
    },
};
</script>

<style scoped>
.home {
    overflow-y: hidden;
}
</style>