<template>
    <div class="home">
        <Navbar title="Post-IT" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Home",
    components: {
        // HelloWorld,
        Navbar,
    },
};
</script>
