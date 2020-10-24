<template>
  <div fixed:top class=" bg-white rounded" id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">
        <img class="icon" src="../../src/assets/PIlogo.png" width="39" />
        Post-IT
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
            to="/allnotice"
            :class="[currentPage.includes('allnotice') ? activeClass : '']"
            >Notice Board</b-nav-item
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
              variant="outline-warning"
              class="mr-3"
              to="signup"
              >Sign Up</b-button
            >
            <b-button
              v-if="!user && !currentPage.includes('login')"
              variant="outline-warning"
              class="mr-2"
              to="login"
              >Log In</b-button
            >
            <b-button v-if="user" @click.prevent="signout"> Sign Out</b-button>
            <!-- <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                <display4>User</display4>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#" to="/About"
                                >Sign Out</b-dropdown-item
                            >
                        </b-nav-item-dropdown> -->
            <!-- </b-navbar-nav>
                    <b-navbar-nav> -->
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="☰" right>
              <b-dropdown-item href="https://www.iiests.ac.in/" target="_blank"
                >IIEST</b-dropdown-item
              >
              <b-dropdown-item
                href="https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"
                target="_blank"
                >IT-IIEST</b-dropdown-item
              >
              <b-dropdown-item
                href="https://www.facebook.com/search/top?q=society%20of%20information%20technology%20-%20socit"
                target="_blank"
                >SOCIT</b-dropdown-item
              >
            </b-nav-item-dropdown>
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
}</style
>>
