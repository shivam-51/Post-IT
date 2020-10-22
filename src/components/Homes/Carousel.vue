<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
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
              class="image img-fluid"
              src="@/assets/SOCIT.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="image img-fluid"
              id="HR"
              src="@/assets/HR.jpeg"
              alt="image slot"
            />
            <p style="margin-top:3px">
              <small
                >Prof. Hafizur Rahaman,Former Head of Department<br />
                with Prof. Mitsuo Ochi,President of Hiroshima University ,
                Japan</small
              >
            </p>
            <br />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="image img-fluid"
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
#carousel {
  padding-top: 75px;
  margin-top: 40px;
  text-align: center;
}
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
  color: black;
}

.carousel-control-prev-icon:after {
  content: "<";
  font-size: 55px;
  color: black;
}
.image {
  width: auto;
  height: 300px;
  max-height: 360px;
}
#HR {
  height: 240px;
}
</style>
