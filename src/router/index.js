import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/authentication/Signupcard.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/authentication/Logincard.vue")
  },
  {
    path: "/addblog",
    name: "AddBlog",
    component: () => import("../views/AddBlog.vue")
  },
  {
    path: "/allblog",
    name: "AllBlog",
    component: () => import("../views/AllBlog.vue")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
