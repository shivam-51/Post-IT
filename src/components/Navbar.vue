<template>
    <div fixed:top class="shadow p-0 mb-5 bg-white rounded" id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
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
export default {
    name: "navbar",
    props: { title: String },
};
</script>

<style scoped>
.bg-info {
    background-color: #563d7c !important;
    padding: 0.7rem;
}
</style>>
