<template>

  <div>
    <div class="icon-bar">
 <a href="https://www.facebook.com/iiest.shibpur.official" class="facebook"><i class="fab fa-facebook-f"></i></a> 
  <a href="https://twitter.com/iiest_s" class="twitter"><i class="fab fa-twitter"></i></a> 
  <a href="https://iiests.irins.org/" class="vidwan"><i class="fas fa-lightbulb"></i></a> 
  <a href="https://www.linkedin.com/school/iiests/" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
  <a href="shivamhere247@gmail.com" class="gmail"><i class="  fas fa-envelope"></i></a> 
</div>
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
              src="@/assets/IIESTlogo.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="image img-fluid"
              id="HR"
              src="@/assets/HR.jpeg"
              alt="image slot"
            />
            <p style="margin-top: 3px">
              <small
                >Prof. Hafizur Rahaman,Former Head of Department<br />
                with Prof. Mitsuo Ochi,President of Hiroshima University ,
                Japan</small
              >
            </p>
            <br />
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
  width:90%;
  left:70px;
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
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3B5998;
  color: white;
}

.twitter {
  background: #55ACEE;
  color: white;
}

.vidwan {
  background: purple;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.gmail {
  background: #bb0000;
  color: white;
}

</style>
