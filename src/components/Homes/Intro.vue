<template>
  <!-- Create Section -->
  <section id="create-section" class="py-5 mt-5">
    <div class="container">
      <div class="mt-5">
        <div
          class="card p-md-5 p-2 ml-md-n5 mr-md-n5"
          style="background-color: paleturquoise"
        >
          <div class="row">
            <div class="col-md-6 order-1 text-center">
              <div class="floating component">
                <img class="image img-fluid" src="@/assets/oldcollege.png" />
              </div>
            </div>
            <div
              class="col-md-6 mt-3 order-2 text-center"
              style="font-size: 50px"
            >
              <h1 class="display-3 heading1">IIEST | IT</h1>
              <p class="lead mt-3">
                Indian Institute of Engineering Science and Technology, Shibpur
                the 2nd oldest institute in India (163 years old) comes under
                the Council of National Institutes of Technology. The Department
                of Information Technology started its journey in 2000 and since
                then has been producing the best in class engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div
          class="card p-md-5 p-2 ml-md-n5 mr-md-n5"
          style="background-color: #f00"
        >
          <div class="row">
            <div
              class="col-md-6 order-2 primary-overlay text-white text-center"
            >
              <div class="floating component">
                <img class="image img-fluid" src="@/assets/PIlogodark.png" />
              </div>
            </div>
            <div
              class="col-md-6 mt-3 order-1 text-center primary-overlay text-white"
            >
              <h1 class="display-3 heading1">Post-IT</h1>
              <p class="lead">
                We present to you POST-IT: a social platform to connect people
                and form a network. Users can share the articles to social media
                feeds, have endless conversation and authentic human connection.
                This platform is made exclusively by and for the Department of
                Information Technology, IIEST Shibpur. Gone are the days when we
                had to send email to every person, what's the contemporary
                alternative? Just Post-IT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.heading1 {
  text-shadow: 2px 2px 8px;
}
.image {
  height: 400px;
  padding-bottom: 2px;
}
.card {
  border-style: outset;
  border-radius: 50px;
  background-size: cover;
  box-shadow: 8px 6px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* margin-left:60px; */
  /* width: 40%; */
}
.card:hover {
  box-shadow: 6px 8px 16px 0 rgba(0, 0, 0, 0.2);
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
