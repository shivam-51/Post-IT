<template>
  <div fixed:top class="  rounded fixed-top" id="navbar">
    <b-navbar toggleable="lg" type="" variant="info">
      <b-navbar-brand href="#" to="/">
        <img class="icon" src="../../src/assets/PIlogodark.png" width="39" />
        <!-- <div style="color:blue" class="pr-5"> -->
        Post-IT
        <!-- </div> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
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
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button
              v-if="!user && !currentPage.includes('signup')"
              variant="outline-danger"
              class="mr-3"
              to="signup"
              >Sign Up</b-button
            >
            <b-button
              v-if="!user && !currentPage.includes('login')"
              variant="outline-danger"
              class="mr-2"
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
  background-color: white !important;
  padding: 0.7rem;
  box-shadow: 1px 1px 8px;
}
.icon {
  display: inline-block;
  margin-right: 2px;
}
</style>
