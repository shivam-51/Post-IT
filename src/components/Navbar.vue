<template>
  <div fixed:top class=" bg-white rounded" id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" class="pl-5 fixed-top">
      <b-navbar-brand href="#" to="/">
        <img class="icon" src="../../src/assets/PIlogo.png" width="39" />
        Post-IT
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="cl-effect-1">
          <b-nav-item
            href="#"
            to="/allblog"
            :class="[currentPage.includes('allblog') ? activeClass : '']"
            >Blogs</b-nav-item
          >
          <b-nav-item
            href="#"
            to="/team"
            :class="[currentPage.includes('team') ? activeClass : '']"
            >Meet the team</b-nav-item
          >
          <b-nav-item
            to="/people"
            :class="[currentPage.includes('people') ? activeClass : '']"
            >People</b-nav-item
          >
          <b-nav-item
            to="/allnotice"
            :class="[currentPage.includes('addnotice') ? activeClass : '']"
            >Notice Board</b-nav-item
          >
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button
              v-if="!user && !currentPage.includes('signup')"
              variant="outline-warning"
              class="mr-4"
              to="signup"
              >Sign Up</b-button
            >
            <b-button
              v-if="!user && !currentPage.includes('login')"
              variant="outline-warning"
              class="mr-5"
              to="login"
              >Log In</b-button
            >
            <b-button v-if="user" @click.prevent="signout"> Sign Out</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navbar",
  data() {
    return {
      user: null,
      activeClass: "active"
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = !!user;
      //   console.log("takes time huh");
    });
  },

  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  methods: {
    signout() {
      var user = firebase.auth().currentUser;
      if (user)
        console.log("Before " + firebase.auth().currentUser.displayName);
      firebase.auth().signOut();
      this.user = null;
      //   console.log("After log out " + firebase.auth().currentUser);
    }
  }
};
</script>

<style scoped>
.bg-info {
  background-color: #1e0c42 !important;
  padding: 0.7rem;
  box-shadow: 2px 2px 8px;
}
.icon {
  display: inline-block;
  margin-right: 2px;
}
.nav-link {
  font-size: 17px;
}
.cl-effect-1 a::before,
.cl-effect-1 a::after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.cl-effect-1 a::before {
  margin-right: 10px;
  content: "[";
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.cl-effect-1 a::after {
  margin-left: 10px;
  content: "]";
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.cl-effect-1 a:hover::before,
.cl-effect-1 a:hover::after,
.cl-effect-1 a:focus::before,
.cl-effect-1 a:focus::after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}
</style>
