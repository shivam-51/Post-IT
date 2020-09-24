<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="40000"
            controls
            indicators
            background="white"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <div class="component">
                <b-carousel-slide>
                    <template v-slot:img>
                        <img
                            class="image"
                            src="@/assets/ITlogo.png"
                            alt="image slot"
                        />
                    </template>
                </b-carousel-slide>
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <template v-slot:img>
                        <img
                            class="image"
                            src="@/assets/IIESTlogo.png"
                            alt="image slot"
                        />
                    </template>
                </b-carousel-slide>
            </div>
        </b-carousel>
    </div>
</template>


<style>
.carousel-control-prev-icon,
.carousel-control-next-icon {
    height: 100px;
    width: 100px;
    outline: black;
    background-image: none;
}

.carousel-control-next-icon:after {
    content: ">";
    font-size: 55px;
    color: red;
}

.carousel-control-prev-icon:after {
    content: "<";
    font-size: 55px;
    color: red;
}
.image {
    width: auto;
    height: 360px;
    max-height: 360px;
}
</style>