<template>
  <div class="body">
    <h1 class="display-5 mt-3 text-center font-weight-bold heading1">
      Meet the brains behind Post-IT!
    </h1>
    <hr />
    <br />
    <div class="container">
      <div class="our_team card">
        <div class="pic">
          <img src="../assets/team/SRsir.jpg" class="img-fluid" />
        </div>
        <div class="team-content">
          <h4 class="title">Surajit Kumar Roy</h4>
          <span class="post">Project Mentor</span>
          <span class="post">Associate Professor, Information Technology</span>
          <span class="post">IIEST Shibpur</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="our_team" v-for="member in members" :key="member.id">
        <div class="pic">
          <img
            :src="require(`@/assets/team/${member.pic_name}`)"
            class="img-fluid"
          />
        </div>
        <div class="team-content">
          <h4 class="title">{{ member.name }}</h4>
          <span class="post">{{ member.role }}</span>
        </div>
        <ul class="social">
          <li>
            <a v-bind:href="member.facebook_link" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a v-bind:href="member.github_link" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li>
            <a v-bind:href="member.facebook_link" target="_blank"
              ><i class="fas fa-envelope"></i
            ></a>
          </li>
          <li>
            <a v-bind:href="member.facebook_link" target="_blank"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "team",
  data() {
    return {
      members: [
        {
          id: "1",
          pic_name: "Divyansh_Masiwal.jpg",
          name: "Divyansh Masiwal",
          role: "Front End Developer",
          facebook_link: "https://www.facebook.com/divyansh.masiwal.7",
          github_link: "https://github.com/BAAHUBALI7781/",
          mail_id: "mailto:divyanshm1609@gmail.co",
          linkedin_link:
            "https://www.linkedin.com/in/divyansh-masiwal-3ba250188/"
        },
        {
          id: "2",
          pic_name: "Shivam.jpg",
          name: "Shivam Singh",
          role: "Full Stack Developer",
          facebook_link: "https://www.facebook.com/heyshivam51",
          github_link: "https://github.com/shivam-51/",
          mail_id: "mailto:shivamhere247@gmail.com",
          linkedin_link: "https://www.linkedin.com/in/shivamhere"
        },
        {
          id: "3",
          pic_name: "Pran.jpg",
          name: "Praneetha",
          role: "Full Stack Developer",
          facebook_link: "https://www.facebook.com/praneethanarayanasetti",
          github_link: "https://github.com/praneetha3108/",
          mail_id: "mailto:praneethanarayanasetti@gmail.com",
          linkedin_link:
            "https://www.linkedin.com/in/praneetha-narayanasetti-9270b6190"
        },
        {
          id: "4",
          pic_name: "Adi.jpg",
          name: "Aditya Agarwal",
          role: "Back End Developer",
          facebook_link:
            "https://www.facebook.com/profile.php?id=100008020094550",
          github_link: "https://github.com/aditya2610/",
          mail_id: "mailto:adityaagarwal109@gmail.com",
          linkedin_link: "https://www.linkedin.com/in/aditya-agarwal-b6242b192/"
        }
      ]
    };
  }
};
</script>
<style scoped>
.heading1 {
  text-shadow: 0px 1px 2px;
}
.body {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
  background: linear-gradient(to bottom right, white, #bcbdc4);
  padding-bottom: 10px;
  padding-top: 10px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.our_team {
  background-color: #f7f5ec;
  text-align: center;
  width: 210px;
  /* overflow:hidden; */
  position: relative;
  margin: 0px 20px;
  padding: 20px 0 50px;
  width: 40%;
  height: 20%;
  -moz-box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.3);
}
.our_team:hover {
  border-radius: 4px;
}
.our_team .pic {
  display: inline-block;
  margin-bottom: 0px;
  z-index: 1;
  position: relative;
}

.our_team .pic img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0;
}
.our_team:hover .pic img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.9);
}

.our_team .title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #190f77;
  /* padding:10px; */
  padding-top: 10px;
  padding-bottom: 7px;

  margin: 0;
}
.our_team .post {
  display: block;
  font-size: 17px;
  margin-top: 0px;
}
.social {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 35px;
  position: absolute;
  background: crimson;
  bottom: 100%;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease 0s;
}
.our_team:hover .social {
  bottom: 0;
  opacity: 1;
}
.our_team .social li {
  display: inline-block;
}
.our_team .social li > a {
  text-decoration: none;
  display: block;
  padding: 7px;
  font-size: 17px;
  color: black;
  transition: all 0.3s ease 0s;
}

@media (min-width: 1025px) {
  .body {
    min-height: 50vh;
  }
}

@media (max-width: 1024px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .container1 {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .our_team {
    width: 18%;
    margin-top: 30px;
    width: 60%;
    height: 20%;
  }
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }
  .our_team {
    width: 80%;
    margin-top: 30px;
    width: 80%;
    height: 20%;
  }
}
</style>
