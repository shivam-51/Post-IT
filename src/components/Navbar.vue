<template>
  <div fixed:top class="shadow p-0 bg-white rounded" id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">
        <img class="icon" src="../../src/assets/PIlogo.png" width="39" />
        {{ title }}
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            href="#"
            to="/addblog"
            :class="[currentPage.includes('addblog') ? activeClass : '']"
            >Blogs</b-nav-item
          >
          <b-nav-item
            href="#"
            to="/team"
            :class="[currentPage.includes('team') ? activeClass : '']"
            >Meet the team</b-nav-item
          >
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button
              v-show="currentPage.includes('signup') ? false : true"
              variant="outline-warning"
              class="mr-3"
              to="signup"
              >Sign Up</b-button
            >
            <b-button
              v-show="currentPage.includes('login') ? false : true"
              variant="outline-warning"
              class="mr-2"
              to="login"
              >Log In</b-button
            >
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
export default {
  name: "navbar",
  props: { title: String },

  computed: {
    currentPage() {
      return this.$route.path;
    }
  },
  data() {
    return {
      activeClass: "active"
    };
  }
};
</script>

<style scoped>
.bg-info {
  background-color: #1e0c42 !important;
  padding: 0.7rem;
}
.icon {
  display: inline-block;
  margin-right: 2px;
}</style
>>
