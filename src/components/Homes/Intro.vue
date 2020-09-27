<template>
    <!-- Create Section -->
    <section id="create-section" class="py-5 mt-5">
        <div class="container">
            <div class="row card mt-5 p-5" style="background-color: #b4e8f5">
                <div class="row">
                    <div class="col-md-6 order-1">
                        <div class="floating component">
                            <img class="image" src="@/assets/oldIIEST.png" />
                        </div>
                    </div>
                    <div
                        class="col-md-6 mt-3 order-2 text-center mt-5"
                        style="font-size: 50px"
                    >
                        <h1 class="display-3">IIEST</h1>
                        <p class="lead mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. In nihil consequuntur quidem animi quam
                            necessitatibus deserunt ea suscipit consequatur
                            quisquam.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row card mt-5 p-5" style="background-color: #f14d10">
                <div class="row">
                    <div class="col-md-6 order-2">
                        <div class="floating component">
                            <img class="image" src="@/assets/PIlogo.png" />
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 order-1 text-center mt-5">
                        <h1 class="display-3">Post-IT</h1>
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. In nihil consequuntur quidem animi quam
                            necessitatibus deserunt ea suscipit consequatur
                            quisquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Intro",
};
</script>

<style scoped>
.image {
    height: 400px;
    padding-bottom: 2px;
}
.card {
    margin-left: -15mm;
    margin-right: -15mm;
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* width: 40%; */
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    from {
        transform: translate(0, 0px);
    }
    65% {
        transform: translate(0, 20px);
    }
    to {
        transform: translate(0, -0px);
    }
}
</style>
