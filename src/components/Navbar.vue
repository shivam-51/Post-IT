<template>
    <div fixed:top class="shadow p-0 mb-5 bg-white rounded" id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <img class="icon" src="../../src/assets/pilogo.png" width="39" />
                {{title}}
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" active>Blogs</b-nav-item>
                    <b-nav-item href="#" disabled>Thread</b-nav-item>
                </b-navbar-nav>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <b-nav-item href="#" active>
                                <router-link to="/">About</router-link>
                            </b-nav-item>
                        </b-navbar-nav>
                        <b-button class="mr-3">Sign Up</b-button>
                        <b-button variant="outline-warning" class="mr-2">Log In</b-button>
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <display4>User</display4>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
// import login from "./authentication/Logincard";
// import signup from "./authentication/Signupcard";

export default {
    name: "navbar",
    props: { title: String },
    // components: { login, signup },
};
</script>

<style scoped>
.bg-info {
    background-color: #563d7c !important;
    padding: 0.7rem;
}
.icon {
    display: inline-block;
    margin-right: 2px;
}
</style>>
