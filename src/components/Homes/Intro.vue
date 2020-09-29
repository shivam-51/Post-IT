<template>
    <!-- Create Section -->
    <section id="create-section" class="py-5 mt-5">
        <div class="container">
            <div class="row card mt-5 p-5" style="background-color: paleturquoise">
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
                        <h1 class="display-3">IT-IIEST</h1>
                        <p class="lead mt-3">
                           Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)  comes under the Council of National Institutes of Technology.2nd oldest institute in India (163 years old) .  The Department of Information Technology started its journey in 2000. The department has produced excellent IT engineers who are serving in different reputed organizations and pursuing higher studies at various Institutes of Excellence.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row card mt-5 p-5" style="background-color: pink">
                <div class="row">
                    <div class="col-md-6 order-2">
                        <div class="floating component">
                            <img class="image" src="@/assets/PIlogodark.png" />
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 order-1 text-center mt-5">
                        <h1 class="display-3">Post-IT</h1>
                        <p class="lead">
                             POST-IT is a social platform to connect people and form a network. Users can share the articles to social media feeds, have endless conversation and authentic human connection. The community can share content by posting stories, links, images, and videos in the form of blogs. This platform is designed by the Department of Information Technology, IIEST Shibpur with an aim to meet new people, share ideas, interest they care about the most, success stories with a wide diversity of interests.
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
    border-style: outset;
    border-radius: 50px;
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
